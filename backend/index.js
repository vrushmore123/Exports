const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const exampleRoutes = require('./routes/exampleRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use('/api', exampleRoutes);

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));