const classCategoryService = require('../services/ClassService');

module.exports = {
    createClassCategory: async (req, res) => {
        try {  
            const { name } = req.body;
            const data = await classCategoryService.createClass(name);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getClassCategories: async (req, res) => {
        try {
            const data = await classCategoryService.getAllClass();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getClassCategoryById: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await classCategoryService.getClassById(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}