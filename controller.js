     // Lembrar o controller é que fala HTTP então precisa do EXPRESS
     // Dentro do express tem uma função do HTTP fazendo a requisição
        const express = require('express')

     // Função router do express é que faz os destinos baseado no metodo da requisão
        const router = express.Router()

     //  o caminho '/' é a porta 4000 , evocando a const service através da função require. 
     //  ./ direto na pasta no arquivo service
         const service = require('./service')



     //Pegar  TODOS os bairros 
         router.get('/bairros', (req, res) => {
                res.json(service.todosBairros());
            });
   //pegar um bairro com suas coordenadas. idcard é o nome do bairro ex: CENTRO
          router.get('/todosBairros/:idcard', (req, res) => {
            const resultadobairroEncontrado = service.bairroEncontrado(req.params.idcard)
                if(resultadobairroEncontrado.lenght>0){
                    console.log('PASSEI NO CONTROLLER')
                    res.json(resultadobairroEncontrado);
                } else
                {
                    res.sendStatus(404);
                }
            });
         router.post('/listar', (req, res) =>{
                //const teste = req.body;
                //teste.push();
                console.log(req.body);
                res.sendStatus(200);
            });

    // Para fazer require de um arquivo para o outro usar a sintaxe:module.exports , para exportar o conteúdo
            module.exports =  router
    // linha 12 do arquivo servidor 



