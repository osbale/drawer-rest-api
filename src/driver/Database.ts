import COLLECTIONS from "./data/collections.ts";
import { CollectionItem } from "./types.ts";

export class Database {
  #collection: CollectionItem[] = [];

  constructor(collectionName: string) {
    if (collectionName in COLLECTIONS) {
      this.#collection = COLLECTIONS[collectionName];
    } else {
      throw Error("collection not found");
    }
  }

  async findAll() {
    return this.#collection;
  }

  async findOne(itemId: string) {
    const item = this.#collection.find(({ id }) => id === itemId);
    if (!item) return null;
    return item;
  }

  async deleteOne(itemId: string) {
    const index = this.#collection.findIndex(({ id }) => id === itemId);
    if (index < 0) return null;

    this.#collection.splice(index, 1);
  }

  async updateOne(itemId: string, itemData: Omit<CollectionItem, "id">) {
    const index = this.#collection.findIndex(({ id }) => id === itemId);
    if (index < 0) return null;

    this.#collection[index] = { ...this.#collection[index], ...itemData };
    return this.#collection[index];
  }

  async addOne(itemData: Omit<CollectionItem, "id">) {
    const id = crypto.randomUUID();
    const newItem = { id, ...itemData };

    this.#collection.push(newItem);
    return newItem;
  }
}
