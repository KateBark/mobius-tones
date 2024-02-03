const knex = require("knex")(require("../knexfile"));

const index = (req, res) => {
  const { title, artist, url } = req.body;
  const videoId = url.split("https://www.youtube.com/watch?v=")[1].split("&")[0];
  const imageUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
  // when auth and dynamic routes set, use req.params.id - for now, using 1
  // const member_id = req.params.id;
  const member_id = 1;

  knex("videos")
    .insert({
      title,
      artist,
      url,
      image: imageUrl,
      member_id
    })
    .then(id => {
      res.status(201).json({ message: "Upload successful!", id });
    })
    .catch(err => res.status(400)
      .send(`Could not upload video: ${err}`));
}

module.exports = {
  index
}