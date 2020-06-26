
exports.up = function(knex) {
    return knex.schema.createTable("items", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("image").nullable();
        table.boolean("is_popular").nullable();
        table.boolean("is_new").nullable();
        table.boolean("is_active");
        table.boolean("is_meat").notNullable();
        table.boolean("is_drink").notNullable();
        table.integer("itemcategory_id").unsigned();
        table.timestamps(true, true);
        table.foreign("itemcategory_id").references("id").inTable("itemcategories");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("items");
};
