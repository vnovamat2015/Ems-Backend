// express é framework com varias facilidades para projetos
// const express é buscada na internet com super poderes
const express = require('express')

// cors escuta o servidor e fala com browser via HTPP
// através do método get fazendo a comunicação do Frontend com Backend
const cors = require('cors')

// bodyParser trata o corpo da requisição HTTP, no caso aqui um json
const bodyParser = require('body-parser');

// essa const app usa os super poderes do express
const app = express()
const port = 4000
app.use(bodyParser.json())
app.use(cors())

// Momento em que o servidor chama o controller através da função 
// require passando o método controller
// ./ controller está mesmo nível do arquivo servidor
const controller = require('./controller.js');
const { todosBairros } = require('./service.js');

// evocando a const controller através do endpoit app.use
// '/' significa na porta 4000, envia para o destino controller
app.use('/',controller)

// Abrindo (escutando) a porta do servidor 4000 
app.listen(port, () => {
//console.log(todosBairros)
  console.log("O servidor 4000 está rodando...",);
   });

