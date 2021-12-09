const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')

app.use(cors())

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

app.get('/sensores', (req, res) => {
  res.json(sensores);
});
app.get('/sensores/:id', (req, res) => {
  var coordenada = null;
  for (i = 0; i < sensores.length; i++) {
    if (sensores[i].id == req.params.id) {
      coordenada = sensores[i]
    }
  }
  if (coordenada == null) {
    res.status(404).send()
  } else {
        res.json(coordenada)
  }
})


app.get('/tipoSensor', (req, res) => {
  res.json(tipoSensor);
});
app.get('/tipoSensor/:id', (req, res) => {
  var sensor = null;
  for (i = 0; i < tipoSensor.length; i++) {
    if (tipoSensor[i].id == req.params.id) {
      sensor = tipoSensor[i]
    }
  }
  if (sensor == null) {
    res.status(404).send()
  } else {
        res.json(sensor)
  }
})
app.get('/logSensores', (req, res) => {
  res.json(logSensores);
});
app.get('/logSensores/:id', (req, res) => {
  var sensor = null;
  for (i = 0; i < logSensores.length; i++) {
    if (logSensores[i].id == req.params.id) {
      sensor = logSensores[i]
    }
  }
  if (sensor == null) {
    res.status(404).send()
  } else {
        res.json(sensor)
  }
})
app.post('/localizacao', (req, res) => {
  const coordenada = req.body;
  localizacao.push(coordenada);
  res.sendStatus(201);
  console.log(req.body);
})
/// cria o objeto mas não atualiza a propriedade
app.put('/localizacao/:id', (req, res) => {
  
  for (i = 0; i <localizacao.length; i++) {
    if (localizacao[i].id == req.params.id) {
      if (req.body.id)
        localizacao[i].id = req.body.id;
      if (req.body.id)
        res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
})

        app.listen(port, () => {
                   console.log("O servidor está rodando 5000 BD...",);
                })


           

