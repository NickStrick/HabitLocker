const db = require('../../../data/dbConfig.js');

module.exports = {
    getSectionsByCat
}

function getSectionsByCat(id) {
    let query = db('sections');

    return query
        .where('category', id)
}

function add(section) {
    return db('sections')
        .insert(section, '*')
}

//Updates a single category

function update(id, changes) {
    return db('sections')
        .where({ id })
        .update(changes, '*')
}

//Removes a single category by id

function remove(id) {
    return db('sections')
        .where({ id })
        .del();
}
