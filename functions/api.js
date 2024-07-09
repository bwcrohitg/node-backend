const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
/* To troubleshoot CORS error */
const cors = require('cors');
app.use(cors());

router.get('/', (req, res) => {
  res.send('App is running..');
});

router.use(express.json());

router.get("/tab", async (req, res) => {
	res.send('hello oppp');
})

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);