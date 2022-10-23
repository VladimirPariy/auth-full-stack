import mysql from 'mysql2';


const connection = mysql.createPool({
	host: 'localhost',
	user: 'test-user',
	password: 'password',
	database: 'auth'
}).promise()


export { connection }