const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection( 
    {
    host: 'localhost',
    user: 'root',
    password: 'Joedirt2010@',
    database: 'election'
    },
    console.log('connected to the election database')
);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });