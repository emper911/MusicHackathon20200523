const express = require('express');
const app = express();
// const server = https.createServer({ key: key, cert: cert }, app);
// const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + "/public"));
app.use(router);
app.route("/");

app.listen(3000, () => {
  console.log("listening on 3000");
});


//root html file
app.get("/", function (req, res) {
  res.sendFile("root");
});

