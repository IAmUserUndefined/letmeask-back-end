import { Router } from "express";  

import userRouters from "./userRouters";
import roomRouters from "./roomRouters";
import questionRouters from "./questionRouters";

const router = Router();

router.use(userRouters);
router.use(roomRouters);
router.use(questionRouters);

export default router;