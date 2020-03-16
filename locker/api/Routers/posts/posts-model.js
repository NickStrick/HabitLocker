const db = require('../../../data/dbConfig.js');

module.exports = {
    getPosts,
    getPostsBySection
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

function getPostsBySection(id) {
    let query = db('posts');

    return query
        .where('section', id)
}