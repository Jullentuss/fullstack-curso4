let Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = (req, res) => {
  res.status(200).json({
    bicicletas: Bicicleta.all
  });
}

exports.bicicleta_create = (req, res) => {
  let b = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  b.ubicacion = [req.body.lat, req.body.lng];
  Bicicleta.add(b);
  res.status(200).json({
    bicicleta: b
  });
}

exports.bicicleta_delete = (req, res) => {
  Bicicleta.removeById(req.body.id);
  res.status(204).send();
}

exports.bicicleta_update = (req, res) => {
  let b = Bicicleta.findById(req.body.id);
  b.color = req.body.color;
  b.modelo = req.body.modelo;
  b.ubicacion = [req.body.lat, req.body.lng];
  res.status(200).json({
    bicicleta: b
  });
}