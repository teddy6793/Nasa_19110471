const mongoose = require('mongoose');

//require('dotenv').config();

// Update below to match your own MongoDB connection string.
const MONGO_URL = "mongodb+srv://anhtien123:anhtien123@cluster0.gjwj5i4.mongodb.net/?retryWrites=true&w=majority";// process.env.MONGO_URL;

//console.log(MONGO_URL);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

//mongoConnect();

module.exports = {
  mongoConnect,
  mongoDisconnect,
}