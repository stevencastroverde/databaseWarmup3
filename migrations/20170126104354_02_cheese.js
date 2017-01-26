
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cheese', function(table){
    table.increments('id');
    table.string('name');
    table.string('texture');
    table.integer('owner_id').unsigned()
    table.foreign('owner_id').references('user.id')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cheese');
};
