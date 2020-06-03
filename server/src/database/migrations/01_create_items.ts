import Knex from 'knex'

export async function up(knex:Knex){
    return knex.schema.createTable('items', tabel => {
        tabel.increments('id').primary()
        tabel.string('image').notNullable()
        tabel.string('title').notNullable()
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('items')
}