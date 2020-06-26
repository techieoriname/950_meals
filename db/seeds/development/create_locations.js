
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
            id: 1,
            country: 'Nigeria',
            state: 'Lagos',
            city: 'Ikeja',
            zipcode: '101212',
            is_active: 1
        },
        {
            id: 2,
            country: 'Nigeria',
            state: 'Lagos',
            city: 'Lekki',
            zipcode: '102322',
            is_active: 1
        }
      ]);
    });
};
