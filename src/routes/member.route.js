import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.render("membership/index");
});

export { router as membershipRoute };
