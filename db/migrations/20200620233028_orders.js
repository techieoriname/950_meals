
exports.up = function(knex) {
    return knex.schema.createTable("orders", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned();
        table.string("total_quantity").notNullable();
        table.string("total_amount").nullable();
        table.string("status").nullable();
        table.string("ref").notNullable();
        table.timestamps(true, true);
        table.foreign("user_id").references("id").inTable("users");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("orders");
};
