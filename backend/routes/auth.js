import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const route = Router();

route.post("/signup", signup);
route.get("/login", login);
route.post("/logout", logout);

export default route;
