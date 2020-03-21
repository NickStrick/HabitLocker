const db = require('../../../data/dbConfig.js');

module.exports = {
    getCategoriesByUser,
    add,
    update,
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
