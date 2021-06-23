const mongoose = require('mongoose');
const connection = 'mongodb://localhost:27017/carDealership';

const connectDb = () => {
    return mongoose.connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: 'root',
        pass: 'example'
    });
};

module.exports = connectDb;