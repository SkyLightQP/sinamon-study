import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

const arr: string[] = [];

router.get("/name", (req, res) => {
  res.status(200).json({ data: arr });
});

const validator = [body("name").isString()];
router.post("/name", validator, (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({
      data: error.array(),
    });
    return;
  }

  const { name } = req.body;
  arr.push(name);

  res.status(201).json({ data: arr });
});

router.put("/name/:id", validator, (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({
      data: error.array(),
    });
    return;
  }

  const { name } = req.body;
  const { id } = req.params;

  arr[parseInt(id)] = name;

  res.status(200).json({ data: arr });
});

router.delete("/name/:id", (req, res) => {
  const { id } = req.params;

  arr.splice(parseInt(id), 1);

  res.status(200).json({ data: arr });
});

export default router;
