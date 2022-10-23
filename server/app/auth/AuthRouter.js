import { Router } from "express";
import AuthController from "./AuthController.js";
import { check } from 'express-validator';

const authRouter = new Router();

authRouter.post('/registration', [
	check('password', 'Invalid password').isLength({ min: 3, max: 10 }),
	check('email', 'Invalid email').isEmail()], AuthController.registration);
authRouter.post('/login', AuthController.login)

export { authRouter };