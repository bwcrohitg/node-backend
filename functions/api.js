const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
/* To troubleshoot CORS error */
const cors = require("cors");
app.use(cors());

router.get("/", (req, res) => {
  res.send("App is running..");
});
router.get("/api", (req, res) => {
  res.send("api App is running..");
});
router.use(express.json());

router.get("/tab", async (req, res) => {
  res.send("hello oppp");
});
router.get("/tab-1", (req, res) => {
  const data = [];
  for (let index = 0; index < 10000; index++) {
    const item = {
      id: index,
      from: "tab-1",
      random: Math.floor(Math.random() * 10000),
      name: "User " + index,
      createdOn: new Date().getTime(),
    };
    data.push(item);
  }
  res.send({ data });
});
router.get("/tab-2", (req, res) => {
  const data = [];
  for (let index = 0; index < 10000; index++) {
    const item = {
      id: index,
      from: "tab-2",
      random: Math.floor(Math.random() * 10000),
      name: "User " + index,
      createdOn: new Date().getTime(),
    };
    data.push(item);
  }
  res.send({ data });
});
router.get("/tab-3", (req, res) => {
  const data = [];
  for (let index = 0; index < 10000; index++) {
    const item = {
      id: index,
      from: "tab-3",
      random: Math.floor(Math.random() * 10000),
      name: "User " + index,
      createdOn: new Date().getTime(),
    };
    data.push(item);
  }
  res.send({ data });
});
app.use("/api", router);
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
