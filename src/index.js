const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user");
const app = express();
const port = process.env.port || 2700;

//routes
app.get("/", (req, res) => {
  res.send("welcome to my api");
});

//middleware
app.use(express.json());
app.use(userRoutes);

//mongo db connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongodb atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
