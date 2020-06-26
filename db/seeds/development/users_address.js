
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_addresses').insert([
        {
            id: 1,
            user_id: 1,
            country: 'Nigeria',
            state: 'Lagos State',
            city: 'Ikeja',
            address: '30B2 Remi Fani Kayode Avenue',
            is_default: 1
        },
        {
            id: 2,
            user_id: 1,
            country: 'Nigeria',
            state: 'Lagos State',
            city: 'Ikeja',
            address: '45 Oduduwa Crescent, Ikeja GRA',
            is_default: 0
        }
      ]);
    });
};
