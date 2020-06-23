
exports.up = function(knex) {
    return knex.schema.createTable("orderproducts", (table) => {
        table.increments("id").primary();
        table.integer("order_id").unsigned();
        table.integer("item_id").unsigned();
        table.string("quantity").nullable();
        table.string("amount").nullable();
        table.timestamps(true, true);
        table.foreign("order_id").references("id").inTable("orders");
        table.foreign("item_id").references("id").inTable("items");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("orderproducts");
};
