const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/messages', require('./routes/messageRoutes'));
app.use('/customers', require('./routes/customerRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
