import express from "express";
import { getData, getDetailedData } from "./fetcher.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "welcome to api add /api/v1/:plName" });
});

app.get("/api/v1", (req, res) => {
  res.json({ message: "welcome to the api" });
});

app.get("/api/v1/:plName", async (req, res) => {
  const { plName } = req.params;
  const plInfo = await getData(plName);
  const plDetailedInfo = await getDetailedData(plName);

  res.json({ plInfo, plDetailedInfo });
});

const port = process.env.port || 3000;
app.listen(port, () =>
  console.log(`server started at \n http://localhost:${port}`)
);
