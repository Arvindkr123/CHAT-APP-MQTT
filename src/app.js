import express from "express";
import bodyParser from "body-parser";
// import mqttClient from "./mqtt";
import cors from "cors";
import { PORT } from "./config/config.js";

const app = express();
app.use(cors({ origin: "http://127.0.0.1:5500" }));
app.use(bodyParser.json());

// MQTT publish endpoint
// app.post("/publish", (req, res) => {
//   const { topic, message } = req.body;
//   mqttClient.publish(topic, message, () => {
//     res.status(200).send("Message sent");
//   });
// });

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
