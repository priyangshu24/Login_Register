const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/LoginDB'); // No need for deprecated options
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

module.exports = connectDB;
