const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')

app.use(cors())



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
});

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


           

