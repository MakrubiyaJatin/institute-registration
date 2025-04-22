const express = require('express');
const router = express.Router();
const controller = require('../controllers/InstituteController');

router.post('/', controller.createInstitute);
router.get('/', controller.getInstitutes);

module.exports = router;
