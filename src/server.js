const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3001; // Make sure this port is different from your React app's port

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myReactAppDb',
  password: 'D@niele991',
  port: 5432, // Default PostgreSQL port
});

app.use(express.json());
app.use(cors()); // This will enable all CORS requests

app.get('/matches', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM matches'); // Fetching only the "match" column
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
