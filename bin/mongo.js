const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://admin:password@localhost:27017/red_bicicletas', {
    'auth': { 'authSource': 'admin' },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

module.exports = db;