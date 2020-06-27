exports.up = function (knex) {
    return knex.schema.alterTable("items", function (table) {
        table.string("slug").unique();
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("items", (table) => {
        table.dropColumn("slug");
    });
};
