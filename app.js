const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/tab-1', (req, res) => {
  const data = [];
  for (let index = 0; index < 10000; index++) {
    const item = {
      from: 'tab-1',
      random: Math.floor(Math.random() * 10000),
      name: 'User ' + index,
      createdOn: new Date().getTime(),
    };
    data.push(item);
  }
  res.send({ data });
});
app.get('/tab-2', (req, res) => {
  const data = [];
  for (let index = 0; index < 10000; index++) {
    const item = {
      from: 'tab-2',
      random: Math.floor(Math.random() * 10000),
      name: 'User ' + index,
      createdOn: new Date().getTime(),
    };
    data.push(item);
  }
  res.send({ data });
});
app.get('/tab-3', (req, res) => {
  const data = [];
  for (let index = 0; index < 10000; index++) {
    const item = {
      from: 'tab-3',
      random: Math.floor(Math.random() * 10000),
      name: 'User ' + index,
      createdOn: new Date().getTime(),
    };
    data.push(item);
  }
  res.send({ data });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
