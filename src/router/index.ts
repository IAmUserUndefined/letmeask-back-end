import { Router } from "express";  

import userRouters from "./userRouters";
import roomRouters from "./roomRouters";
import questionRouters from "./questionRouters";
import responseRouters from "./responseRouters";

const router = Router();

router.use(userRouters);
router.use(roomRouters);
router.use(questionRouters);
router.use(responseRouters);

export default router;