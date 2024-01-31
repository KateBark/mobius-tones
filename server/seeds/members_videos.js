const videosData = require('../seeds_data/videos');
const membersData = require('../seeds_data/members');

exports.seed = function (knex) {
  return knex('videos').del()
    .then(() => knex('members').del())
    .then(() => knex('members').insert(membersData))
    .then(() => knex('videos').insert(videosData))
};