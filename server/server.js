const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

let { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const videosRoute = require("./routes/videos");
app.use("/", videosRoute);

const tonesRoute = require("./routes/tones");
app.use("/mytones", tonesRoute);

// const channelRoute = require("./routes/channel");
// app.use("/channel").channelRoute;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});