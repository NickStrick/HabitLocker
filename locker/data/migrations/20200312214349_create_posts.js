
exports.up = function (knex) {
    return knex.schema.createTable('posts', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();
        tbl.varchar('section')
            .notNullable()
            .references('id')
            .inTable('sections')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};