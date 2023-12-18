const knex = require("knex")(require("../knexfile"));

const index = (req, res) => {
  const tonesToRetrieve = req.params.id;

  knex("videos")
    .where("members.member_id", tonesToRetrieve)
    .join("members", "videos.member_id", "members.member_id")
    .select("videos.*")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => res.status(400)
      .send(`Could not retrieve videos: ${err}`));
}

module.exports = {
  index
}