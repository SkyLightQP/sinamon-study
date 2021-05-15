import express from "express";
import Get from "./apis/get";

const app = express();

app.use(Get);

app.listen(8080, () => {
  console.log("Start server");
});
