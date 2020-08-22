var Bicileta = require('../models/bicicleta');

exports.bicicleta_list = function(req, res) {
  res.render('bicicletas/index', {bicis: Bicileta.all});
}

exports.bicicleta_create_get = function(req, res) {
  res.render('bicicletas/create');
}

exports.bicicleta_create_post = function(req, res) {
  let  b = new Bicileta(req.body.id, req.body.color, req.body.modelo)
  b.ubicacion = [req.body.lat, req.body.lng];
  Bicileta.add(b);
  res.redirect('/bicicletas');
}

exports.bicicleta_delete_post = function(req, res){
  Bicileta.removeById(req.body.id);
  res.redirect('/bicicletas');
}

exports.bicicleta_update_get = function(req, res) {
  let b = Bicileta.findById(req.params.id)
  res.render('bicicletas/update', {b});
}

exports.bicicleta_update_post = function(req, res) {
  let b = Bicileta.findById(req.params.id)
  b.id = req.body.id;
  b.color = req.body.color;
  b.modelo = req.body.modelo;
  b.ubicacion = [req.body.lat, req.body.lng];
  res.redirect('/bicicletas');
}
