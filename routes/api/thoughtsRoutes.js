const router = require('express').Router();
const {
 getThoughts,
 getSingleThought,
 updateThoughts,
 deleteThoughts,
 createThought,
 addReaction,
 deleteReaction
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:thoughtsId
router
  .route('/:thoughtsId')
  .get(getSingleThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

///api/thoughts/:thoughtId/reactions`
router.route("/:thoughtsId/reactions")
.put(addReaction)
router.route("/:thoughtsId/reactions/:reactionId")
.delete(deleteReaction)

module.exports = router;
