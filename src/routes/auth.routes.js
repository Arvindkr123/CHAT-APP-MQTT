import { Router } from "express";
import { userRegisterController } from "../controllers/user.controllers.js";

const router = Router();

router.post("/signup", userRegisterController);

export default router;
