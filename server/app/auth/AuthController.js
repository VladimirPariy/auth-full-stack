import { validationResult } from 'express-validator'
import AuthService from './AuthService.js';
import bcrypt from 'bcryptjs';

class AuthController {
	async registration(req, res) {
		try {

			const validatingError = validationResult(req)
			if (!validatingError.isEmpty()) return res.status(400).json({ error: validatingError.array() })

			const candidate = await AuthService.findOne(req.body.email)
			if (candidate.length > 0) return res.status(400).json({ message: 'User already exists' })

			const encryptedPassword = await bcrypt.hash(req.body.password, 7)

			await AuthService.registrationUser(req.body.email, encryptedPassword)

			return res.json({ message: 'User successfully registered' })


		} catch (error) {
			res.status(500).json(error.message);
		}
	}


	login(req, res) {
		try {

		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

export default new AuthController();