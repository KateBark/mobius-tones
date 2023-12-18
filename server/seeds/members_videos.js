const videosData = require('../seed_data/videos');
const membersData = require('../seed_data/members');

exports.seed = function (knex) {
  return knex('members')
    .del()
    .then(function () {
      return knex('members').insert(membersData);
    })
    .then(() => {
      return knex('videos').del();
    })
    .then(() => {
      return knex('videos').insert(videosData);
    });
};