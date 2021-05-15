import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(500);
});

router.get("/name", (req, res) => {
  res.status(200).json({
    name: "사람이름",
  });
});

router.get("/name/:nickname", (req, res) => {
  const { nickname } = req.params;

  res.status(200).json({
    name: nickname,
  });
});

router.get("/age", (req, res) => {
  const { age } = req.query;

  const inputAge = age ? age.toString() : "";

  res.status(200).json({
    age: parseInt(inputAge) || "잘못된 형식",
  });
});

export default router;
