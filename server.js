import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import session from "express-session";

const app = express();
app.enable("trust proxy");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: "https://simple-react-12.onrender.com",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(cookieParser());

app.use(
  session({
    name: "session",
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
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
  const msg = "おはようございます";
  req.session.message = msg;
  res.json({ message: "COOKIE SET SUCCESS" });
});

// sessionの取り出し
app.get("/get", (req, res) => {
  const message = req.session.message;
  res.json({ message: message });
});

app.listen(PORT, console.log("サーバーを開始します"));
