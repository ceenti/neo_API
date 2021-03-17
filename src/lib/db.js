const mongoose = require('mongoose');

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    JWT_SECRET
} = process.env


//const url = `mongodb://${DB_USER}:${DB_PASSWORD}@bwcluster-shard-00-00.0ymd7.mongodb.net:27017,bwcluster-shard-00-01.0ymd7.mongodb.net:27017,bwcluster-shard-00-02.0ymd7.mongodb.net:27017/educapp?ssl=true&replicaSet=atlas-nojnkw-shard-0&authSource=admin&retryWrites=true&w=majority`;
const url  = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
    connect
}