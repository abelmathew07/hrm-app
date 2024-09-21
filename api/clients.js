const mongoose = require("mongoose");



const clientsSchema = new mongoose.Schema({
    clientName: String,
    email: { type: String, lowercase: true },
    phone:Number,
    createdAt: { type: Date, default: () => Date.now(), immutable: true },
    updatedAt: { type: Date, default: () => Date.now() },
    project: [{
        projectName:String,
        status:{ type: String, lowercase: true },
        deadline:Date
    }],
    payment:[{
        invoiceId:String,
        paymentDate:Date,
        paidAmount:Number
    }]
  });
  
  module.exports = mongoose.model("Clients", clientsSchema);
  