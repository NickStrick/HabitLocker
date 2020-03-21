const router = require("express").Router();

const db = require("./categories-model.js");

module.exports = router;

router.get('/:user_id', getCategories);
router.post('/:user_id', addCategory);

function getCategories(req, res) {
    let { user_id } = req.params;

    db.getCategoriesByUser(user_id)
        .then(posts => {
            if (posts.length > 0) {
                res.status(200).json(posts)
            } else {
                res.status(404).json({ message: "There are no available categories." })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

function addCategory(req, res) {
    let cargo = req.body

    db.add(cargo)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(500).json(err))
}