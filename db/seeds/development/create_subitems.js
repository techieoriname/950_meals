exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('subitems').del()
        .then(function () {
            // Inserts seed entries
            return knex('subitems').insert([
                {
                    id: 1,
                    name: 'Fried Egg',
                    amount: 0,
                    sale: 0,
                    image: '1592862661913_noodles_fried_egg.jpg',
                    is_popular: 1,
                    is_new: 1,
                    is_active: 1,
                    type: 'sidemeal',
                    item_id: 1
                },
                {
                    id: 2,
                    name: 'Plantain(Dodo)',
                    amount: 0,
                    sale: 0,
                    image: '1592862661913_noodles_fried_egg.jpg',
                    is_popular: 1,
                    is_new: 1,
                    is_active: 1,
                    type: 'sidemeal',
                    item_id: 1
                },
                {
                    id: 3,
                    name: 'Chicken',
                    amount: 0,
                    sale: 0,
                    image: '1592862661913_noodles_fried_egg.jpg',
                    is_popular: 1,
                    is_new: 1,
                    is_active: 1,
                    type: 'meat',
                    item_id: 1
                },
                {
                    id: 4,
                    name: 'Turkey',
                    amount: 0,
                    sale: 0,
                    image: '1592862661913_noodles_fried_egg.jpg',
                    is_popular: 1,
                    is_new: 1,
                    is_active: 1,
                    type: 'meat',
                    item_id: 1
                },
                {
                    id: 5,
                    name: 'Coca Cola',
                    amount: 0,
                    sale: 0,
                    image: '1592862661913_noodles_fried_egg.jpg',
                    is_popular: 1,
                    is_new: 1,
                    is_active: 1,
                    type: 'drink',
                    item_id: 1
                },
                {
                    id: 6,
                    name: 'Fanta',
                    amount: 0,
                    sale: 0,
                    image: '1592862661913_noodles_fried_egg.jpg',
                    is_popular: 1,
                    is_new: 1,
                    is_active: 1,
                    type: 'drink',
                    item_id: 1
                }
            ]);
        });
};
