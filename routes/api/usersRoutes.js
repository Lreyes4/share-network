const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/assignments
// router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/friends/:friendsId').delete(removeFriend).put(addFriend);

module.exports = router;