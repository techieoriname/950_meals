
exports.up = function(knex) {
    return knex.schema.createTable("items", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("image").nullable();
        table.boolean("is_popular").nullable().defaultTo(0);
        table.boolean("is_new").nullable().defaultTo(1);
        table.boolean("is_active").defaultTo(1);
        table.boolean("is_meat").notNullable().defaultTo(0);
        table.boolean("is_drink").notNullable().defaultTo(0);
        table.integer("itemcategory_id").unsigned();
        table.timestamps(true, true);
        table.foreign("itemcategory_id").references("id").inTable("itemcategories");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("items");
};
