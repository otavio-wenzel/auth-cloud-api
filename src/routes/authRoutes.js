const express = require('express');
const controller = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', controller.register);
router.post('/login', controller.login);

router.get(
  '/profile',
  authMiddleware,
  controller.profile
);

module.exports = router;