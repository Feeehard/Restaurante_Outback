require('dotenv').config();


const Express = require('express')
const app = Express()
const mysql = require('mysql2');
const routes = require("./routes/outbackRoutes")

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3000);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err);
        return;
    }

    console.log('Conectado ao MySQL do Aiven!');
});
