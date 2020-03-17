const db = require('../../../data/dbConfig.js');

module.exports = {
    getCategoriesByUser
}

function getCategoriesByUser(id) {
    let query = db('categories');

    return query
        .where('user_id', id)
}