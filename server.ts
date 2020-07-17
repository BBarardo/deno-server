import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const file = await Deno.open("index.html");

app.use((ctx) => {
  ctx.response.body = file;
});

await app.listen({ port: 8000 });
console.log("listening on localhost:8000");
