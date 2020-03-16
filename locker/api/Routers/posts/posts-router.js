const router = require("express").Router();

const db = require("./posts-model.js");

module.exports = router;

//routes
router.get('/', getPosts);

//Get All Posts.
function getPosts(req, res) {
    db.getPosts()
        .then(posts => {
            if (posts.length > 0) {
                res.status(200).json(posts)
            } else {
                res.status(404).json({ message: "There are no available posts." })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

function getPostsById(req, res) {
    let { id } = req.body;
    db.getPosts(id)
        .then(posts => {
            if (posts.length > 0) {
                res.status(200).json(posts)
            } else {
                res.status(404).json({ message: "That post is not available." })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

