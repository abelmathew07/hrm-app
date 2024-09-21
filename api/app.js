const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); 
const Clients = require("./clients");

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/HRM", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/clients", async (req, res) => {
  try {
    const clientData = req.body;

    const clients = await Clients.create(clientData);
    await clients.save();

    res.status(201).json(clients);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
