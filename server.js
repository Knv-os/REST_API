import express from "express";
import publicRoutes from "./routes/public.js";
import privateRoute from "./routes/private.js";
import auth from "./middlewares/auth.js";

const app = express();
app.use(express.json());

app.use("/", publicRoutes);
app.use("/", auth, privateRoute);

app.listen(3000, () => console.log("Rodando"));

//kevinsousa
// EDNF1GeLcjQ5q7qx
