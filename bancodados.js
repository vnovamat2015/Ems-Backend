const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')

app.use(cors())
/////////////////////////////////////////////////////////////////////
const tipoSensor = [
  { id: 1, nome: 'chuva'}, 
  { id: 2, nome: 'temperatura'}, 
  { id: 3, nome: 'pressão'}, 
  { id: 4, nome: 'humidade'}
];

const sensores = [
  { id: 1, idTipoSensor:1, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W",numSerie: '234'},
  { id: 2, idTipoSensor:4, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W",numSerie: '234'},
  { id: 3, idTipoSensor:1, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W",numSerie: '345'},
  { id: 4, idTipoSensor:3, coordenadas: " 15° 52' 44'' S 22° 15' 30'' W",numSerie: '523'},
  { id: 5, idTipoSensor:2, coordenadas: " 45° 25' 24'' S 10° 34' 56'' W",numSerie: '134'},
  { id: 6, idTipoSensor:4, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W",numSerie: '234'},
  { id: 7, idTipoSensor:1, coordenadas: " 40° 12' 41'' S 13° 03' 01'' W",numSerie: '245'},
  { id: 8, idTipoSensor:3, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W",numSerie: '345'},
  { id: 9, idTipoSensor:2, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W",numSerie: '432'},
  { id: 10, idTipoSensor:4, coordenadas:" 35° 52' 14'' S 11° 10' 01'' W",numSerie: '235'},
                ];
 
const logSensores = [
  { id: 1, dataHora: "2021 -08-05 12:15", idSensor: 1, valor: '1,0'},
  { id: 2, dataHora: "2021 -09-05 12:15", idSensor: 2, valor: '20,8'},
  { id: 3, dataHora: "2021 -10-05 12:15", idSensor: 3, valor: '1012,3'},
  { id: 4, dataHora: "2021 -10-05 12:15", idSensor: 4, valor: '65,0'},
  { id: 5, dataHora: "2021 -08-05 12:15", idSensor: 1, valor: '1,0'},
  { id: 6, dataHora: "2021 -09-05 12:15", idSensor: 4, valor: '90,8'},
  { id: 7, dataHora: "2021 -10-05 12:15", idSensor: 3, valor: '984,3'},
  { id: 8, dataHora: "2021 -10-05 12:15", idSensor: 4, valor: '65,0'},
  { id: 9, dataHora: "2021 -08-05 12:15", idSensor: 1, valor: '1,0'},
  { id: 10, dataHora: "2021 -09-05 12:15", idSensor:2, valor: '10,9'},
           ];
////////////////////////////////////////////////////////////////////////////
    app.get('/bairros', (req, res) => {
      res.json(bairros);
    });
    app.get('/bairros/:nome', (req, res) => {
    //var bairro = null;
    for (i = 0; i < bairros.length; i++) {
    if (bairros[i].nome == req.params.nome) {
    bairros = bairro[i]
    }
    }
    if (bairro == null) {
    res.status(404).send()
    } else {
    console.log(bairro)
    res.json(bairro)
    }
    })
    app.get('/quadrantes', (req, res) => {
      res.json(quadrantes);
    });
    app.get('/quadrantes/:nome', (req, res) => {
      var setor = null;
      for (i = 0; i < quadrantes.length; i++) {
        if (quadrantes[i].nome == req.params.nome) {
          setor = quadrantes[i]
        }
      }
      if (setor == null) {
        res.status(404).send()
      } else {
        console.log(setor)
        res.json(setor)
      }
    })
    app.get('/placas', (req, res) => {
      res.json(placas);
    });
    /* verificar Gustavo quero pegar pelo idBarro
    app.get('placas/:idBairro', (req, res) => {
      var placa = null;
      for (i = 0; i < placas.length; i++) {
        if (placas[i].idBairro == req.params.idBairro) {
          placa = placas[i]
        }
      }
      if (placa == null) {
        res.status(404).send()
      } else {
        console.log(placa)
        res.json(placa)
      }
    })*/

    app.get('/sensores', (req, res) => {
      //console.log(sensores)
      res.json(sensores);
    });
 // gostaria de pegar pelo idPlaca
    app.get('/sensores/:id', (req, res) => {
      var sensor = null;
      for (i = 0; i < sensores.length; i++) {
        if (sensores[i].id == req.params.id) {
          sensor = sensores[i]
        }
      }
      if (sensor == null) {
        res.status(404).send()
      } else {
        console.log(sensor)
        res.json(sensor)
      }
    })

    app.get('/logSensores', (req, res) => {
      res.json(logSensores);
    });


// cadastrar novos Bairros
app.post('/bairros', (req, res) => {
  const bairro = req.body;
  bairros.push(bairro);
  res.sendStatus(201);
  console.log(req.body);
})
app.post('/quadrantes', (req, res) => {
  const quadrante = req.body;
  quadrantes.push(quadrante);
  res.sendStatus(201);
  console.log(req.body);
})

///////////////////////////////////////////////////////////////
//atualizar
app.put('/bairros/:id', (req, res) => {
  //const bairros = bairro
  for (i = 0; i < bairros.length; i++) {
    if (bairros[i].id == req.params.id) {
      if (req.body.id)
        bairros[i].id = req.body.id;
      if (req.body.id)
        res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
})
app.put('/quadrantes/:nome', (req, res) => {
  /// const bairros = bairro
   for (i = 0; i < quadrantes.length; i++) {
     if (quadrantes[i].nome == req.params.nome) {
       if (req.body.nome)
         bairros[i].nome = req.body.nome;
       if (req.body.nome)
         res.sendStatus(200);
       return;
     }
   }
   res.sendStatus(404);
 })
//////////////////////////////////////////
app.delete('/bairros/:nome', (req, res) => {
  //const bairros = bairro
  const tamanhoAntes = bairros.length
  bairros = bairros.filter(nome =>nome != req.params.nome);

  if(tamanhoAntes > bairros.length)
      res.sendStatus(200);
  else
      res.sendStatus(404);

})

app.listen(port, () => {
  console.log("O servidor está rodando 3000 BD...",);
})
