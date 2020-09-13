const moongose = require('mongoose');
const Schema = moongose.Schema;


const bicicletaSchema = new Schema({
  code: Number,
  color: String,
  modelo: String,
  ubicacion: {
    type: [Number], index: { type: '2dsphere', sparse: true }
  }
});

bicicletaSchema.statics.createInstance = function(code, color, modelo, ubicacion) {
  return new this({
    code: code,
    color: color,
    modelo: modelo,
    ubicacion: ubicacion
  });
};

bicicletaSchema.statics.add() = function(bAdd, callback) {
  return this.create(bAdd, callback);
}

bicicletaSchema.statics.getAll = function(callback) {
  return this.find({}, callback);
}

bicicletaSchema.methods.toString = function() {
  return 'code: ' + this.code + ' | color: ' + this.color;
}

module.exports = moongose.model('Bicicleta', bicicletaSchema);