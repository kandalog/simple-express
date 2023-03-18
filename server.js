import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
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

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "root" });
});

app.get("/set", (req, res) => {
  res.cookie("name", "tee", {
    sameSite: "none",
    secure: true,
    httpOnly: true,
    maxAge: 10000,
  });
  res.json({ message: "root" });
});

app.get("/get", (req, res) => {
  const name = req.cookies.name;
  res.json({ name: name });
});

app.listen(PORT, console.log("サーバーを開始します"));
