import { Router } from "express";

const router = Router();

router.get("/executive-committee", (_, res) => res.render("organization/executive-committee"));
router.get("/editorial-board", (_, res) => res.render("organization/editorial-board"));

export { router as organizationRoute };
