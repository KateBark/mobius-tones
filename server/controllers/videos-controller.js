const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("videos")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => res.status(400).send(`Could not retrieve videos: ${err}`));
}

const singleVideo = (req, res) => {
  const { id } = req.params;

  knex("videos")
    .where({ id })
    .first()
    .then(video => {
      if (video) {
        res.json(video);
      } else {
        res.status(404).json({ error: "Video not found" });
      }
    })
    .catch(error => {
      console.error("Error retrieving video data:", error);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  index,
  singleVideo
}