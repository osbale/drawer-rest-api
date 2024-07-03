import { Router } from "jsr:@oak/oak@^16.1.0/router";
import db from "../client/db.ts";

const drawerItems = new Router();

drawerItems.get("/", async ({ response }) => {
  response.body = await db.findAll();
  response.status = 200;
});

drawerItems.get("/:id", async ({ response, params }) => {
  response.body = await db.findOne(params.id);
  response.status = 200;
});

drawerItems.post("/", async ({ request, response }) => {
  response.body = await db.addOne(await request.body.json());
  response.status = 201;
});

drawerItems.delete("/:id", async ({ params, response }) => {
  await db.deleteOne(params.id);
  response.status = 204;
});

drawerItems.put("/:id", async ({ request, params, response }) => {
  response.body = await db.updateOne(params.id, await request.body.json());
  response.status = 200;
});

export default drawerItems;
