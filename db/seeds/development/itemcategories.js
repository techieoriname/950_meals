
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('itemcategories').del()
    .then(function () {
      // Inserts seed entries
      return knex('itemcategories').insert([
        {id: 1, name: 'Breakfast', is_active: 1},
        {id: 2, name: 'Lunch', is_active: 1},
        {id: 3, name: 'Dinner', is_active: 1}
      ]);
    });
};
