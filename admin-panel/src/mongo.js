const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://inspiredgrow:pPM0ggZq2cJ8GV39@cluster0.cfzsy.mongodb.net/retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB', err);
    return;
  }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = client;