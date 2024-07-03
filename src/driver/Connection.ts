import { Database } from "./Database.ts";

export class Connection {
  db(collectionName: string) {
    return new Database(collectionName);
  }
}
