const express = require('express');
const router = express.Router();
const controller = require('../controllers/ExamController');

router.get('/options', controller.getExamOptions);

module.exports = router;
