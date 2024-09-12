const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Import employee routes
const employeeRoutes = require('./routes/employee');




// Initialize app and middleware
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Example route to test the server
app.get('/', (req, res) => {
  res.send('HRM API is running');
});
// Register routes
app.use('/api/employees', employeeRoutes);

// Listen on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 