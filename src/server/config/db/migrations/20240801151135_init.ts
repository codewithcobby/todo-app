import { Knex } from "knex"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex<[]>) {
  return knex.schema.createTable("tasks", (table: Knex.CreateTableBuilder) => {
    table.increments("id").primary().unique()
    table.integer("user_id").references("id").inTable("users").onDelete("cascade").notNullable()
    table.string("name").notNullable()
    table.string("description").notNullable()
    table.timestamps(true, true)
    table.timestamp("deleted_at", { useTz: true }).nullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex<[]>) {
  return knex.schema.dropTable("tasks")
}
