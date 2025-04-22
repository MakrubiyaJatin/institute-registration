const express = require('express');
const router = express.Router();
const controller = require('../controllers/RegistrationController');

router.post('/register', controller.createRegistration);
router.get('/register', controller.getRegistration);


module.exports = router;
