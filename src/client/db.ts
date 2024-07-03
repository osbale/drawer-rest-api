import { Driver } from "../driver/Driver.ts";
import { env } from "../env.ts";

const client = new Driver(env.CONNECTION_STRING);
const connection = await client.connect();
const db = connection.db("DrawerItems");
export default db;
