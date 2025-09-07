import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.render("about/index"));

router.get("/achievements", (_, res) => res.render("about/achievements"));

router.get("/segmite-events", (_, res) => res.render("about/segmite-events"));

export { router as aboutRoute };
