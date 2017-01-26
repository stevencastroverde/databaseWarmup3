
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE from "user"; ALTER SEQUENCE user_id_seq restart with 3;')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user').insert({id: 1, email: 'poop@poop.com', password: bcrypt.hashSync('poopbackwards', salt)}),
        knex('user').insert({id: 2, email: 'steven.castroverde@gmail.com',password:bcrypt.hashSync('password', salt)}),

      ]);
    });
};
