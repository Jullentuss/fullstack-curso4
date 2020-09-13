const Bicicleta = require('../../models/bicicleta');
const mongoose = require('mongoose');

describe('Test Bicicletas', () => {

  beforeAll((done) => {
    mongoose.connection.close(done)
  });

  beforeEach((done) => {
    mongoose.disconnect();
    mongoose.connect(
      'mongodb://admin:password@localhost:27017/test_red_bicicletas', {
      'auth': { 'authSource': 'admin' },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false
    });

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error'));
    db.once('open', () => {
      console.log('We are connected to test database');
      done();
    });
  });

  afterEach((done) => {
    Bicicleta.deleteMany({}, (error, success) => {
      if (error) console.log(err);
      done();
    });
  });

  describe('Bicicleta.createInstance', () => {
    it('Crear instancia de una Bicicleta', () => {
      let b = Bicicleta.createInstance(1, 'rojo', 'ruta', [4.701314, -74.1100076]);
      expect(b.code).toBe(1);
      expect(b.color).toBe('rojo');
      expect(b.modelo).toBe('ruta');
      expect(b.ubicacion[0]).toBe(4.701314);
      expect(b.ubicacion[1]).toBe(-74.1100076);
    });
  });

  describe('Bicicleta.getAll', () => {
    it('comenzar vacia', (done) => {
      Bicicleta.getAll(function (err, b) {
        expect(b.length).toBe(0);
        done();
      });
    });
  });


  describe('Bicicleta.add', () => {
    it('agregar bicicleta', (done) => {
      let b = Bicicleta.createInstance(1, 'rojo', 'ruta', [4.701314, -74.1100076]);
      Bicicleta.add(b, (err, newB) => {
        if (err) console.log(err);
        Bicicleta.getAll((err, bList) => {
          expect(bList.length).toEqual(1);
          expect(bList[0].code).toEqual(b.code);
          done();
        });
      });
    });
  });

});

/*
beforeEach(function() {
  console.log('test');
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
}); */