import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import DataApi from "./apis/data";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "dagdadgsdfggadfadgfadfgasdfg",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(DataApi);

app.listen(8080, () => {
  console.log("Start server");
});
