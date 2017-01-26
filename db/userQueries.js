const knex = require('./knexConnection');

module.exports = {

getUserByEmail: function(email){
  return knex('user')
    .where('email', email).first();

},

createNewUser: function(user){
  return knex('user')
    .insert(user, '*')
      .then(user => {
        return user
      })
}













};
