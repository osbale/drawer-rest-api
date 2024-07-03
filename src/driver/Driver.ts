import { Connection } from "./Connection.ts";

export class Driver {
  #connectionString: string | undefined;
  constructor(connectionString?: string) {
    this.#connectionString = connectionString;
  }

  connect() {
    if (this.#connectionString) {
      return new Promise<Connection>((resolve) => {
        setTimeout(() => resolve(new Connection()), 1000);
      });
    }

    throw Error("missing connection string");
  }
}
