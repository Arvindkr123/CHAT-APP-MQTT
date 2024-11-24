import express from "express";
import bodyParser from "body-parser";
// import mqttClient from "./mqtt";
import cors from "cors";
import { PORT } from "./config/config.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

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
