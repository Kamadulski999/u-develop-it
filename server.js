const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');


const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);


// Connect to database
const db = mysql.createConnection( 
    {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'election'
    },
    console.log('connected to the election database')
);

// Not Found response for unmatched routes
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});



  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

