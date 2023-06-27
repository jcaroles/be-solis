import Express from "express";
import cors from "cors";

import MockData from "./mocks/data.js";

const app = Express();

const port = 8080;

app.use(cors());

app.get("/api/data", (req, res) => {
  res.send(MockData);
});

app.listen(port, () => {
  console.log(`Serving at port ${8080}!`);
});
