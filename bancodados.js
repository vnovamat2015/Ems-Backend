const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')

app.use(cors())
/////////////////////////////////////////////////////////////////////
const placas = [
  { id: 1, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W"},
  { id: 2, coordenadas: " 69° 15' 02'' S 21° 41' 01'' W"},
  { id: 3, coordenadas: " 19° 25' 02'' S 51° 31' 01'' W"},
  { id: 4, coordenadas: " 35° 52' 14'' S 11° 10' 01'' W"},
  { id: 5, coordenadas: " 09° 55' 02'' S 22° 44' 01'' W"},
  { id: 6, coordenadas: " 19° 25' 02'' S 51° 31' 01'' W"},
  { id: 7, coordenadas: " 15° 25' 41'' S 12° 11' 34'' W"},
  { id: 8, coordenadas: " 10° 09' 02'' S 29° 41' 01'' W"},
  { id: 9, coordenadas: " 20° 15' 22'' S 13° 31' 45'' W"},
  { id: 10, coordenadas: "45° 28' 27'' S 55° 33' 05'' W"},
              ];

const sensorPlacas = [
  { id: 1, idPlaca: 3, idTipo: 1 },
  { id: 2, idPlaca: 2, idTipo: 3 },
  { id: 3, idPlaca: 1, idTipo: 2 },
  { id: 4, idPlaca: 1, idTipo: 4 },
  { id: 5, idPlaca: 7, idTipo: 1 },
  { id: 6, idPlaca: 9, idTipo: 3 },
  { id: 7, idPlaca: 8, idTipo: 2 },
  { id: 8, idPlaca: 4, idTipo: 4 },
  { id: 9, idPlaca: 6, idTipo: 3 },
  { id: 10, idPlaca: 5, idTipo: 4 },
  { id: 11, idPlaca: 7, idTipo: 3 },
  { id: 12, idPlaca: 9, idTipo: 4 },
  { id: 13, idPlaca: 8, idTipo: 1 },
  { id: 14, idPlaca: 4, idTipo: 3 },
  { id: 15, idPlaca: 1, idTipo: 1 },
];
const tipoSensor = [
  { id: 1, nome: 'chuva', idSerie: '345,234,789,986,'}, 
  { id: 2, nome: 'temperatura',idSerie:'980,321,673,108'}, 
  { id: 3, nome: 'pressão',idSensor:'673,219,742,610,'}, 
  { id: 4, nome: 'humidade',idSensor:'216,589,824,305'},
                   ]
const logSensores = [
  { id: 1, dataHora: "2021 -05-05 12:15", idSensor: 1, valor: '1,0',idSerie: "345" },
  { id: 2, dataHora: "2021 -05-05 12:15", idSensor: 2, valor: '27,8',idSerie:'980'},
  { id: 3, dataHora: "2021 -05-05 12:15", idSensor: 2, valor: '12,3',idSerie:'321'},
  { id: 4, dataHora: "2021 -05-05 12:15", idSensor: 4, valor: '65,0',idSerie:'216'},
  { id: 5, dataHora: "2021 -05-05 12:15", idSensor: 3, valor: '983,9',idSerie:'742'},
  { id: 6, dataHora: "2021 -05-05 12:15", idSensor: 4, valor: '78,0',idSerie:'589'},
  { id: 7, dataHora: "2021 -05-05 12:15", idSensor: 3, valor: '1002,8',idSensor:'673'},
  { id: 8, dataHora: "2021 -07-05 10:15", idSensor: 1, valor: '0,0',idSerie:'234'},
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
