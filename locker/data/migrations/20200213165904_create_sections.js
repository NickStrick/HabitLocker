
exports.up = function (knex) {
    return knex.schema.createTable('sections', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();
        tbl.varchar('category')
            .notNullable()
            .references('id')
            .inTable('categories')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sections');
};
