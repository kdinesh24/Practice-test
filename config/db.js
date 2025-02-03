const mongoose = require('mongoose');

const connectDB = async function () {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('MONGODB is connected')
    } catch (error) {
        console.log("MONGODB connection failed")
    }
}

module.exports = connectDB