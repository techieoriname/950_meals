
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
            name: 'Fried Rice',
            image: 'storage/items/1592848108930_fried_rice.jpg',
            slug: 'fried-rice'
        },
      ]);
    });
};
