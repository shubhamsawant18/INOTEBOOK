const express = require('express');
const app = express();
const connectdb = require('./db');
const bodyParser = require("body-parser");
const cors = require('cors'); // Import the cors middleware

// Import the auth and notes routers
const authRouter = require('./routes/auth'); // Assuming you have an auth route
const notesRouter = require('./routes/notes'); // Assuming you have a notes route

connectdb();

// Middleware to parse JSON in the request body
app.use(express.json());
app.use(bodyParser.json());

// Use the cors middleware to enable CORS for all routes
app.use(cors());

// Mount the auth router at the specified path
app.use('/api/auth', authRouter);

// Mount the notes router at the specified path
app.use('/api/notes', notesRouter); // Updated to use /api/notes route

// Other routes and configurations go here

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`INotebook backend listening on port ${PORT}`);
});
