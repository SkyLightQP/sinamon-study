import express from "express";
import NameApi from "./apis/name";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(NameApi);

app.listen(8080, () => {
  console.log("Start server");
});
