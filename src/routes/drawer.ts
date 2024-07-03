import { Router } from "jsr:@oak/oak@^16.1.0/router";
import db from "../client/db.ts";

const drawerItems = new Router();

drawerItems.get("/", async ({ response }) => {
  response.body = await db.findAll();
});

drawerItems.get("/:id", async ({ response, params }) => {
  response.body = await db.findOne(params.id);
});

drawerItems.post("/", async ({ request, response }) => {
  response.body = await db.addOne(await request.body.json());
});

drawerItems.delete("/:id", async ({ params, response }) => {
  response.body = await db.deleteOne(params.id);
});

drawerItems.put("/:id", async ({ request, params, response }) => {
  response.body = await db.updateOne(params.id, await request.body.json());
});

export default drawerItems;
