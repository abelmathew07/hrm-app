const express = require('express')
const mongoose = require("mongoose");
const Clients = require("./clients");


mongoose.connect("mongodb://localhost/HRM");


run();
async function run() {
  try {
    const clients = await Clients.create({
      clientName:"test",
      email:"test@test.com",
      project:{
        projectName:"test project",
        status:"On going",
        deadline:"2024-09-09"
      },
      payment:{
        invoiceId:"testinvoice1",
        paymentDate:"2024-09-09",
        paidAmount:2000
      }
    });
    await clients.save();
    console.log(clients);
  } catch (e) {
    console.log(e.message);
  }
}