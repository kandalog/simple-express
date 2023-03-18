import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: "https://simple-react-12.onrender.com",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "root" });
});

app.get("/set", (req, res) => {
  res.cookie("name", "tee", {
    sameSite: "none",
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ message: "root" });
});

app.listen(PORT, console.log("サーバーを開始します"));
