const router = require("express").Router();

const db = require("./sections-model.js");

module.exports = router;

//routes
router.get('/:category', getSections);
router.post('/', addSection);

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

function addSection(req, res) {
    let cargo = req.body

    db.add(cargo)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(500).json(err))
}

function removeSection(req, res) {
    let {id} = req.params

    db.remove(id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(500).json(err))

}