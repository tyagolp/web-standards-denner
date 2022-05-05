
const express = require('express')
const { Pool, Client } = require("pg")
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/public'));

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/contato', async (request, response) => {

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'VCM',
        password: 'postgres',
        port: 5432,
    })
    const { rows: data } = await pool.query(`Select * FROM contato`)
    await pool.end()


    response.json(data)
});

app.post('/contato', async (request, response) => {

    console.log(request)
    const { nome, email, celular, observacao } = request.params


    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'VCM',
        password: 'postgres',
        port: 5432,
    })
    const res = await pool.query(`INSERT INTO contato(nome, email, celular, observacao)
	VALUES ($1, $2, $3, $4);`, [
        nome, email, celular, observacao
    ])
    await pool.end()

    response.json({})

});
