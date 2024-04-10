const express = require('express');
const router = express.Router();
const soundController = require('../controllers/soundController');

router.get('/sounds', soundController.getSounds);
router.post('/play-sound', soundController.playSound);

module.exports = router;
