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


(function () {
  "use strict";

  console.log("App is running");

  var midiAccess = null;
  navigator.requestMIDIAccess().then(onMidiAccessSuccess, onMidiAccessFailure);

  function onMidiAccessSuccess(access) {
    midiAccess = access;

    var inputs = midiAccess.inputs;
    var inputIterators = inputs.values();

    var firstInput = inputIterators.next().value;

    if (!firstInput) return;
    firstInput.onmidimessage = handleMidiMessage;
  }

  function onMidiAccessFailure(error) {
    console.log(
      "Oops. Something were wrong with requestMIDIAccess",
      error.code
    );
  }

  function handleMidiMessage(e) {
    console.log(e);
  }
})();