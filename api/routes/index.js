const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute");
//adicionamos as rotas de niveis e turmas
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");

// module.exports = app => {
//     app.use(bodyParser.json());
//     app.use(pessoas);
//     // app.get('/', (req, res) => res.send('Olá'))
// }

module.exports = (app) => {
  app.use(bodyParser.json(), pessoas, niveis, turmas);
};
