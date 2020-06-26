exports.up = function (knex) {
  return knex.schema.createTable("locations", (table) => {
    table.increments("id").primary();
    table.string("country").notNullable();
    table.string("state").notNullable();
    table.string("city").notNullable();
    table.string("zipcode").notNullable();
    table.string("is_active").nullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("locations");
};
