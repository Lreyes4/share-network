const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/assignments
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;