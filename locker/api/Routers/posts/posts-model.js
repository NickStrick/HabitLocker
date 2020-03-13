const db = require('../../../data/dbConfig.js');

module.exports = {
    getPosts
}

function getPosts(id) {
    let query = db('posts');

    if (id) {
        return query
            .where('id', id)
            .first()
    }

    return query;
}