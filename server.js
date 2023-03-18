import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import session from "express-session";

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

app.use(
  session({
    name: "session",
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: false,
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    },
  })
);

app.get("/", (req, res) => {
  res.json({ message: "root" });
});

// sessionのセット
app.get("/set", (req, res) => {
  req.session.age = "12";
  res.json({ message: "COOKIE SET SUCCESS" });
});

// sessionの取り出し
app.get("/get", (req, res) => {
  const age = req.session.age;
  res.json({ age: age });
});

app.listen(PORT, console.log("サーバーを開始します"));
