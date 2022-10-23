import axios, { AxiosError } from 'axios';


class Utils{
	async registration(email:string, password:string) {
		try {
			const res = await axios.post('http://localhost:5000/api/registration', {email, password})
			return res
		} catch (error:unknown) {
			if (error instanceof AxiosError ) console.log(error.response?.data.message)
			else if (error instanceof Error) console.log(error.message);
			else console.log(error);
		}
	}
}

export default new Utils();