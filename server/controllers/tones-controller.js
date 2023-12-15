// Trying something new... axios not working

const knex = require("knex")(require("../knexfile"));

const index = (req, res) => {
  const tonesToRetrieve = req.params.id;
  console.log(tonesToRetrieve)
  // console.log("hello")

  knex("videos")
    .where("members.member_id", tonesToRetrieve)
    .join("members", "videos.member_id", "members.member_id")
    .select("videos.*")
    .then(data => {
      console.log(data.data);
      res.status(200).json(data);
    })
    .catch(err => res.status(400)
    .send(`Could not retrieve videos: ${err}`));

// *** Use This One -----------------------------

// const knex = require("knex")(require("../knexfile"));

// const index = (req, res) => {
//   const tonesToRetrieve = req.params.id;
//   console.log(tonesToRetrieve)
//   console.log("hello")

//   knex("videos")
//     .where("member.member_id", tonesToRetrieve)
//     .join("members", "videos.member_id", "members.members_id")
//     .select("videos.*")
//     .then(data => {
//       console.log(data)
//       res.status(200).json(data);
//     })
//     .catch(err => res.status(400).send(`Could not retrieve videos: ${err}`))
//     .finally(() => {
//       knex.destroy();
// });

// -----------------------------

  // knex("videos")
  //   .select("videos.*")
  //   .join("members", "videos.member_id", "members.members_id")
  //   .where("member.member_id", tonesToRetrieve)
  //   .then(data => {
  //     console.log(data)
  //     res.status(200).json(data);
  //   })
  //   .catch(err => res.status(400).send(`Could not retrieve videos: ${err}`))
  //   .finally(() => {
  //     knex.destroy();
  //   });
}

module.exports = {
  index
}