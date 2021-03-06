const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");
const cors = require("cors");


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/messages", require("./routes/messageRoutes"));
app.use("/customers", require("./routes/customerRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/tickets", require("./routes/ticketRoutes"));
app.use("/buildPc", require("./routes/buildPcRoutes"));



app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
