
exports.up = function (knex) {
    return knex.schema.createTable('posts', tbl => {
        tbl.increments();

        tbl.string('title', 255);
        tbl.string('content', 255)
        tbl.varchar('section')
            .notNullable()
            .references('id')
            .inTable('sections')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};