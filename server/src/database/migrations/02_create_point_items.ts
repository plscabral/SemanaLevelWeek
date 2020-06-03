import Knex from 'knex'

export async function up(knex:Knex){
    return knex.schema.createTable('point_items', tabel => {
        tabel.increments('id').primary()
        tabel.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points')

        tabel.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items')
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('point_items')
}