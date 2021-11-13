import { Router } from "express";  

import userRouters from "./userRouters";
import roomRouters from "./roomRouters";

const router = Router();

router.use(userRouters);
router.use(roomRouters);

export default router;