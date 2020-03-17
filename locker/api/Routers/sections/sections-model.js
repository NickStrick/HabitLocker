const db = require('../../../data/dbConfig.js');

module.exports = {
    getSectionsByCat
}

function getSectionsByCat(id) {
    let query = db('sections');

    return query
        .where('category', id)
}