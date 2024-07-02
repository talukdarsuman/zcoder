const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
// const problemRoutes = require('./routes/problemRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/users', userRoutes);
// app.use('/api/problems', problemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
