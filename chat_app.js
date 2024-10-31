import EventEmitter from "events";
const eventEmitter = new EventEmitter();

function sendMessage(username, message, emitter) {
  emitter.emit("message", username, message);
}
eventEmitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`);
});

sendMessage("Alice", "Hi everyone!", eventEmitter);
sendMessage("Bob", "What’s up?", eventEmitter);
sendMessage("Charlie", "I made dinner!", eventEmitter);
sendMessage("Alice", "Sounds great!", eventEmitter);
