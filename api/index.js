const express = require('express');
const routes = require('./routes');
// const bodyParser = require('body-parser')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

// app.use(bodyParser.json())

// app.get('/teste', (req, res) => res
//   .status(200)
//   .send({ mensagem: 'boas-vindas à API' 
// }))

// <---

module.exports = app