import { Router } from "express";
import signinController from "../controllers/signin.controller.js";
import loginController from "../controllers/login.controller.js";

const router = Router();

router.route("/signin").post(signinController);
router.route("/login").post(loginController);

export default router;
