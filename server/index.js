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
<<<<<<< HEAD
app.use('/tickets', require('./routes/ticketRoutes'));
=======
app.use('/buildPc', require('./routes/buildPcRoutes'));
>>>>>>> a8bb6440a4753889b37e3772868917c808846be5

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
