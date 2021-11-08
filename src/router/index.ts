import { Router } from "express";  

import userRouters from "./userRouters";

const router = Router();

router.use(userRouters);

export default router;