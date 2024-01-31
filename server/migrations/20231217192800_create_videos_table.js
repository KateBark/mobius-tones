/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("videos", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("url").notNullable();
    table.string("image").notNullable();
    table.string("artist").notNullable();
    table
      .integer("member_id")
      .unsigned()
      .references("member_id")
      .inTable("members")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("videos");
};
