import { createServer } from "node:http";

//- Import the `createServer` method from the `http` module.

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello, Ekaterina!");
});
