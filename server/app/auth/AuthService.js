import { connection } from '../BD.js';

class AuthController {

	async findOne(email) {
		const user = await connection.query('SELECT * FROM auth.auth WHERE email=?', email);
		return user[0];
	}
	async registrationUser(email, password) {
		const user = await connection.query('INSERT INTO auth.auth (email, password) VALUES (?,?)', [email, password]);
		return user;
	}

}

export default new AuthController();