import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak@^16.1.0/router";
import drawerItems from "./routes/drawer.ts";

const router = new Router().use(
  "/drawer-items",
  drawerItems.routes(),
  drawerItems.allowedMethods()
);

const app = new Application().use(router.routes());

app.addEventListener("listen", ({ port }) => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port: 8080 });
