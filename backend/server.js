const express = require('express');
const app = express();
const port = 5501;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/health-check', (req, res) => res.send('OK'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
