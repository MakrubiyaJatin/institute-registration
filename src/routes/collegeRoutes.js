const express = require('express');
const router = express.Router();
const controller = require('../controllers/CollegeController');

router.get('/options', controller.getCollegeOptions);

module.exports = router;
