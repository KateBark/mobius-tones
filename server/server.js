const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { PORT, BACKEND_URL, CORS_ORIGIN } = process.env;

PORT = process.env.PORT || 8081;

const { google } = require("googleapis");

// Replace 'MY_API_KEY' with actual YouTube API key
const API_KEY = 'MY_API_KEY'

const youtube = google.youtube({
  version: "v3",
  auth: API_KEY
});

const params = {
  // replace snippet???
  part: "snippet",
  // replace with actual search query
  q: "my search query",
  type: "video",
  // replace with actual number of results I want
  maxResults: 10
};

// API request:
youtube.search.list(params, (err, response) => {
  if (err) {
    console.error('Error making API request:', err);
    return;
  }

  const videos = response.data.items;

  videos.forEach(video => {
    console.log("Title:", video.snippet.title);
    console.log("Video ID:", video.id.videoId);
    console.log("Thumbnail URL:", video.snippet.thumbnails.default.url);
  })
})



app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.statis("public"));

// routes

app.get()



app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});