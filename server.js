const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyparser.json());
app.post("/api/v1/start", (req, res) => {
  console.log(req.body);
  res.json({
    status: 200,
    message: "success",
    data: req.body
  });
});

app.get("/api/v1/turn", (req, res) => {
  const turn = fs.readFileSync("turn.json");
  res.json(JSON.parse(turn));
});

app.listen(port, () => console.log(`listening on port ${port}`));
