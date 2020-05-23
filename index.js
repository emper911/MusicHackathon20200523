const express = require('express');
const app = express();
const server = https.createServer({ key: key, cert: cert }, app);
// const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + "/public"));
app.use(router);
app.route("/");

server.listen(3001, () => {
  console.log("listening on 3001");
});


//root html file
app.get("/", function (req, res) {
  res.sendFile("root");
});
