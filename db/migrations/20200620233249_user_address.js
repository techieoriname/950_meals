
exports.up = function(knex) {
    return knex.schema.createTable("user_addresses", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned();
        table.string("country").notNullable();
        table.string("state").notNullable();
        table.string("city").notNullable();
        table.string("address").notNullable();
        table.boolean("is_default").notNullable();
        table.timestamps(true, true);

        table.foreign("user_id").references("id").inTable("users");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_addresses");
};
