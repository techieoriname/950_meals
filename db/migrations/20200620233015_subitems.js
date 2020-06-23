
exports.up = function(knex) {
    return knex.schema.createTable("subitems", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("amount").notNullable();
        table.string("sale").nullable();
        table.string("image").nullable();
        table.boolean("is_popular").nullable().defaultTo(0);
        table.boolean("is_new").nullable().defaultTo(1);
        table.boolean("is_active", 15).defaultTo(1);
        table.string("type").nullable();
        table.integer("item_id").unsigned();
        table.timestamps(true, true);
        table.foreign("item_id").references("id").inTable("items");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("subitems");
};
