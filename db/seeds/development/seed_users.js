exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'doe@gmail.com',
                    password: 123456,
                    phone_number: '+123456789',
                    gender: 'male',
                    scope: ''
                },
            ]);
        });
};
