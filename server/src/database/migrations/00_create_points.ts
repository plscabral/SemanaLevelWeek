import Knex from 'knex'

export async function up(knex:Knex){
    return knex.schema.createTable('points', tabel => {
        tabel.increments('id').primary()
        tabel.string('image').notNullable()
        tabel.string('name').notNullable()
        tabel.string('email').notNullable()
        tabel.string('whatsapp').notNullable()
        tabel.decimal('latitude').notNullable()
        tabel.decimal('longitude').notNullable()
        tabel.string('city').notNullable()
        tabel.string('uf', 2).notNullable()
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('points')
}