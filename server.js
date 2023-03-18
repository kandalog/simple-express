import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "root" });
});

app.get("/set", (req, res) => {
  res.json({ message: "root" });
});

app.listen(PORT, console.log("サーバーを開始します"));
