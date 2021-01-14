import express from "express";
import { getDetailedData } from "./fetcher.js";
import cheerio from "cheerio";
import fetch from "node-fetch";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "welcome to api add /api/v1/:plName" });
});

app.get("/api/v1", (req, res) => {
  res.json({ message: "welcome to the api" });
});

app.get("/api/v1/:plName", async (req, res) => {
  const { plName } = req.params;
  res.json(await getDetailedData(plName));
});

const port = process.env.port || 3000;
app.listen(port, () =>
  console.log(`server started at \n http://localhost:${port}`)
);
