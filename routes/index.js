import express from "express"
import {mainController} from "../controller/index"

const router = express.Router();

router.get("/ping", mainController.ping)

export default router;