let Bicicleta = require('../../models/bicicleta');
let request = require('request');
let server = require('../../bin/www'); 

describe('Bicicleta API /', () => {
    describe('GET Bicicletas', ()=>{
        it('Status 200', () => {
            expect(Bicicleta.all.length).toBe(0);
            let b = new Bicicleta(1, 'rojo', 'corleone', [4.701314,-74.1100076,]);
            Bicicleta.add(b);

            request.get('http://localhost:3000/api/bicicletas', (error, res, body) => {
                expect(res.statusCode).toBe(200);
            });
        });
    });
    
    describe('POST Bicicletas /create', ()=>{
        it('Status 200', (done) => {
            /* expect(Bicicleta.all.length).toBe(0); */
            let headers = {'content-type': 'application/json'}
            /* let b = new Bicicleta(5, 'rojo', 'corleone', [4.701314,-74.1100076]);"id":5, "color":"rojo2, "modelo":"montaña", "lat":rñarurbana"!10, id */
            let b = '{"id":5, "color":"rojo", "modelo":"montaña", "lat":4.701314, "lng": -74.1100076}';
            
            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/create',
                body: b
            }, (error, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(Bicicleta.findById(5).color).toBe('rojo');
                done();
            });
        });
    }); 
});