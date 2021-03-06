
exports.up = function (knex) {
    return knex.schema.createTable('categories', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();
        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('categories');
};