const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Попълни с твоя MongoDB URI
const MONGO_URI = 'mongodb+srv://almishev:asroma@cluster0.cyxfn.mongodb.net/newsapp?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const authorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  category: String
});

const Author = mongoose.model('authors', authorSchema);

async function createAdmin() {
  const hash = await bcrypt.hash('toni@123', 12); // Можеш да смениш паролата тук
  const admin = new Author({
    name: 'Anton',
    email: 't.toni@abv.bg',
    password: hash,
    role: 'admin',
    category: 'General'
  });
  await admin.save();
  console.log('Admin created!');
  mongoose.disconnect();
}

createAdmin(); 