let Bicicleta = function(id, color, modelo, ubicacion)  {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function()  {
  return 'id ' + this.id + ' | color: ' + this.color;
}

Bicicleta.all = [];

Bicicleta.add = (b) => {
  Bicicleta.all.push(b);
} 

Bicicleta.findById = (id) => {
  let b = Bicicleta.all.find(x => x.id == id);
  if (b) {
    return b
  } else {
    throw new Error(`no existe bicicleta con el id: ${id}`)
  }
}


Bicicleta.removeById = (id) => {
  for(let i=0;i<Bicicleta.all.length;i++){
    if (Bicicleta.all[i].id == id) Bicicleta.all.splice(i, 1); break;
  }
}

/* let a = new Bicicleta(1, 'rojo', 'corleone', [4.701314,-74.1100076,])
Bicicleta.add(a); */

module.exports = Bicicleta;