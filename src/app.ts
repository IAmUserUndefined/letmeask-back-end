import express from "express";
import cors from "./middlewares/cors";
import router from "./router/index";

const app = express();

app.use(cors);
app.use(express.json());
app.use(router);

export default app;