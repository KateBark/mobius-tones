const knex = require("../knexfile");

const getAllVideos = async () => {
  return knex("videos").select("*");
};

const addVideo = async (title, url) => {
  return knex("videos").insert({ title, url });
};

module.exports = { getAllVideos, addVideo };