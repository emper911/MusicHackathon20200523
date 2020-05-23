// WEBSOCKETS
let socketUrl = "ws://" + location.hostname + ":3001";
let client = new BinaryClient(socketUrl);
let MIDIStream = null;
client.on("open", function () {
  MIDIStream = client.createStream();
  MIDIStream.on("data", handleReceiveAudioData);
  MIDIStream.on("end", handleEndAudioStream);
});
function handleReceiveAudioData(data) {
  console.log("receive audio data", data);
}
function handleEndAudioStream(data) {
  console.log("end", data);
}
