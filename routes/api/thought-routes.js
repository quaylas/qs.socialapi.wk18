const router =  require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThought)
.post(createThought);

router
.route('/:id')
.get(getThoughtById)
.put(updateThought);

router
.route('/:username/:thoughtId')
.delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(addReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;