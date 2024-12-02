const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://fred:PuNuB223oklPHi3o@cluster0.orllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;