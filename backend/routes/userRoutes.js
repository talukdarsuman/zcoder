const express = require('express');
const {
  checkUsername,
  registerUser,
  loginUser,
  checkEmail,
  checkUsernameForUpdate,
  updateUserInfo,
  getUserRanking
} = require('../controllers/userController');

const router = express.Router();

router.post('/check-username', checkUsername);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/check-email', checkEmail);
router.post('/check-username-for-update', checkUsernameForUpdate);
router.post('/update-user-info', updateUserInfo);
router.post('/get-user-ranking', getUserRanking);

module.exports = router;
