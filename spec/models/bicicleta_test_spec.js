let Bicicleta = require('../../models/bicicleta');

beforeEach(() => {
  Bicicleta.all = [];
});

describe('Bicicleta.all', () => {
  it('comienza vacio', () => {
    expect(Bicicleta.all.length).toBe(0);
  });
});

describe('Bicicleta.all', () => {
  it('agregar objeto', () => {
    expect(Bicicleta.all.length).toBe(0);
    let b = new Bicicleta(1, 'rojo', 'corleone', [4.701314,-74.1100076,]);
    Bicicleta.add(b);
    expect(Bicicleta.all.length).toBe(1);
    expect(Bicicleta.all[0]).toBe(b);
  });
});

describe('Bicicleta.all', () => {
  it('buscar objeto', () => {
    expect(Bicicleta.all.length).toBe(0);
    let b = new Bicicleta(1, 'rojo', 'urbana', [4.701314,-74.1100076,]);
    let c = new Bicicleta(2, 'azul', 'montaña', [4.701314,-74.1100076,]);
    Bicicleta.add(b);
    Bicicleta.add(c);
    let d = Bicicleta.findById(c.id);
    expect(d.id).toBe(c.id);
  });
});

describe('Bicicleta.all', () => {
  it('remover objeto', () => {
    expect(Bicicleta.all.length).toBe(0);
    let b = new Bicicleta(1, 'rojo', 'urbana', [4.701314,-74.1100076,]);
    let c = new Bicicleta(2, 'azul', 'montaña', [4.701314,-74.1100076,]);
    Bicicleta.add(b);
    Bicicleta.add(c);
    expect(Bicicleta.all.length).toBe(2);
    Bicicleta.removeById(1);
    expect(Bicicleta.all.length).toBe(1);
  });
});