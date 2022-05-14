const mysql= require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '461010',
    database: 'agenda-brecho'
})

module.exports = conexao