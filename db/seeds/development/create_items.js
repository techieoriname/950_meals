
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
            id: 1,
            name: 'Indomie',
            image: '1592847311272_indomie.jpg',
            slug: 'indomie',
            is_popular: 1,
            is_new: 1,
            is_active: 1,
            is_meat: 1,
            is_drink: 1,
            itemcategory_id: 1
        },
        {
            id: 2,
            name: 'Indomie',
            image: '1592847517121_yam.jpg',
            slug: 'yam',
            is_popular: 1,
            is_new: 1,
            is_active: 1,
            is_meat: 1,
            is_drink: 1,
            itemcategory_id: 1
        },
        {
            id: 3,
            name: 'Bread',
            image: '1592847630421_bread.jpg',
            slug: 'bread',
            is_popular: 1,
            is_new: 1,
            is_active: 1,
            is_meat: 1,
            is_drink: 1,
            itemcategory_id: 1
        }
      ]);
    });
};
