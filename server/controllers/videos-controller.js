const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("videos")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => res.status(400).send(`Could not retrieve videos: ${err}`));
}

module.exports = {
  index
}