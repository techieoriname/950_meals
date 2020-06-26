
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            id: 1,
            first_name: 'Techie',
            last_name: 'Oriname',
            email: 'techieoriname@gmail.com',
            password: 'I cant kill mysef',
            phone_number: '08161284937',
            gender: 'Male',
            scope: `"user"`,
        }
      ]);
    });
};
