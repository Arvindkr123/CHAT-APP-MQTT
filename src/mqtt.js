import mqtt from "mqtt";
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
  console.log("MQTT connected");
});

client.on("message", (topic, message) => {
  console.log(`Received: ${message.toString()} on ${topic}`);
});

export default client;
