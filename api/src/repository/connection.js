import mysql from 'mysql/promise';


const connection = mysql.CreateConnection({
hsot: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
pwd: process.env.MYSQL_PWD,
db: process.env.MYSQL_DB
})

export { connection }