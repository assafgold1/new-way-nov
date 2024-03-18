const alertsData = require('./alertsData.json');
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package
const moment = require('moment');

const dir = 'api';
const app = express();
const port = 777;
const apiUrl = 'https://www.oref.org.il/WarningMessages/History/AlertsHistory.json';

app.use(cors());

app.get('/api', (req, res) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log("Received API request at", timestamp);
  res.json(alertsData);
});
app.get('/api', async (req, res) => {  
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/${dir}`);
});