const db = require('../../../data/dbConfig.js');

module.exports = {
    getPosts,
    getPostsBySection,
    add,
    remove, 
    update
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

function add(post) {
    return db('posts')
        .insert(post, '*')
}

//Updates a single post

function update(id, changes) {
    return db('sections')
        .where({ id })
        .update(changes, '*')
}

//Removes a single post by id

function remove(id) {
    return db('sections')
        .where({ id })
        .del();
}