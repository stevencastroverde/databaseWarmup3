exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE from cheese; ALTER SEQUENCE cheese_id_seq restart with 6;')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cheese').insert({id: 1, name: 'string', texture:'soft', owner_id:'1'}),
        knex('cheese').insert({id: 2, name: 'provolne', texture:'soft', owner_id:'1'}),
        knex('cheese').insert({id: 3, name: 'cheddar', texture:'hard', owner_id:'2'}),
        knex('cheese').insert({id: 4, name: 'feta', texture:'soft', owner_id:'2'}),
        knex('cheese').insert({id: 5, name: 'mozzarella', texture:'soft', owner_id:'1'})
      ]);
    });
};
