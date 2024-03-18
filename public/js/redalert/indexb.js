//const express = require('express');
//const axios = require('axios');
//const moment = require('moment');
let idnum = 1;
//const app = express();
const port = 3000;
const apiUrl = 'https://www.oref.org.il/WarningMessages/History/AlertsHistory.json';
const dir = 'api';
const kav = '=======================================';
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  fgBlack: '\x1b[30m',
  fgRed: '\x1b[31m',
  fgGreen: '\x1b[32m',
  fgYellow: '\x1b[33m',
  fgBlue: '\x1b[34m',
  fgMagenta: '\x1b[35m',
  fgCyan: '\x1b[36m',
  fgWhite: '\x1b[37m',
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
};

app.get('/api', async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = response.data;
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    console.log(`${colors.fgGreen}${colors.bright}Successful API request!${colors.reset}`);
    console.log(`${colors.fgYellow}${colors.bright}Response data:${colors.reset}`, responseData);
    console.log(`${colors.bgBlue}${kav}${colors.reset}`);
    console.log(`${colors.fgRed}${timestamp}${colors.reset}`);
    console.log(`${colors.bgGreen}${colors.bright}ID: ${idnum++}${colors.reset}`);
    console.log(`${colors.bgCyan}${kav}${colors.reset}`);
    console.log(`${colors.fgGreen}${colors.bright} url: http://localhost:${port}/${dir}${colors.reset}`);
    res.json(responseData);
  } catch (error) {
    console.error(`${colors.fgRed}Error making API request:${colors.reset}`, error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`${colors.fgBlue}${colors.bright}Server listening at http://localhost:${port}/${dir}${colors.reset}`);
});
