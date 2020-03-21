const db = require('../../../data/dbConfig.js');

module.exports = {
    getCategoriesByUser,
    add,
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
