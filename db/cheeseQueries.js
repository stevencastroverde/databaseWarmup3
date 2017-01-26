const knex = require('./knexConnection');

module.exports = {
  getAllChese: function () {
    return knex('cheese');
  },
  getCheeseById: function(id){
    return knex('cheese')
      .where('id', id)
        .first();
  },
  createNewCheese: function(newCheese){
    return knex('cheese')
      .insert({
        name: newCheese.name,
        texture: newCheese.texture,
        owner_id: newCheese.owner_id
      },'id');
  },
  updateCheese: function(id,editedCheese){
    return knex('cheese')
      .where('id', id)
        .update({
          name: editedCheese.name,
          texture: editedCheese.texture,
          owner_id: editedCheese.owner_id
        }, 'id');
  },
  deleteCheese: function(id){
    return knex('cheese')
      .where('id', id)
        .first()
          .del();
  }








};
