// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);

// Sign-in route
router.post('/signin', authController.signin);

module.exports = router;