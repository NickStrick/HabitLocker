const router = require("express").Router();

const db = require("./sections-model.js");

module.exports = router;

//routes
router.get('/:category', getSections);

function getSections(req, res) {
    let { category } = req.params;

    db.getSectionsByCat(category)
        .then(posts => {
            if (posts.length > 0) {
                res.status(200).json(posts)
            } else {
                res.status(404).json({ message: "There are no available sections." })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}