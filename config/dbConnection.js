const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
};

module.exports = connectDb;
