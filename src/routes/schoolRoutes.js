const express = require('express');
const router = express.Router();
const controller = require('../controllers/SchoolController');

router.get('/options', controller.getSchoolOptions);
router.get('/standards', controller.getStandards);
router.get('/subjects', controller.getSubjects);

module.exports = router;
