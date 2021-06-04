import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

const validator = [body("name").isString()];
router.post("/", validator, (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({
      data: error.array(),
    });
    return;
  }

  const { name } = req.body;

  res.cookie("name", name);
  res.sendStatus(200);
});

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(req.cookies);
});

const validator2 = [body("id").isString()];
router.post("/session", validator2, (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({
      data: error.array(),
    });
    return;
  }

  const { id } = req.body;

  const sess = req.session as any;
  sess.userId = id;

  res.sendStatus(200);
});

router.get("/session", (req, res) => {
  res.status(200).json(req.session);
});

router.delete("/session", (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
  });

  console.log(req.session);

  res.sendStatus(200);
});

export default router;
