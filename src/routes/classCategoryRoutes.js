const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClassCategoryController');

router.get('/', controller.getClassCategories);
router.get('/:id', controller.getClassCategoryById);
router.post('/', controller.createClassCategory);

module.exports = router;