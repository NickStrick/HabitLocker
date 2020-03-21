const db = require('../../../data/dbConfig.js');

module.exports = {
    getCategoriesByUser,
    add,
    update,
    remove
}

function getCategoriesByUser(id) {
    let query = db('categories');

    return query
        .where('user_id', id)
}


function add(category) {
    return db('categories')
        .insert(category, '*')
}

//Updates a single category

function update(id, changes) {
    return db('categories')
        .where({ id })
        .update(changes, '*')
}

//Removes a single category by id

function remove(id) {
    return db('categories')
        .where({ id })
        .del();
}