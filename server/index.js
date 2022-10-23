import express from "express";
import { authRouter } from "./app/auth/AuthRouter.js";
import { cors } from './app/middleware/authMiddleware.js'

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', authRouter)


const startApp = () => {
	try {
		app.listen(PORT, () => console.log('Server start'))
	} catch (error) {
		console.log(error);
	}
}
startApp()