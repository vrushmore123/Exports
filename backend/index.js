const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const formRoutes = require('./routes/FORM');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB(); // This will log only after connection success
app.use('/api', formRoutes);

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
