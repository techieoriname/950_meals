
exports.up = function(knex) {
    return knex.schema.createTable("itemcategories", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("is_active");
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("itemcategories");
};
