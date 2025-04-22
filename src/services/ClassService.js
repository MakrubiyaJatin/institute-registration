const models = require("../models");

module.exports = {
    createClass: async (name) => {
        const classCategory = await models.ClassCategory.create(name);
        return classCategory;
    },
    getAllClass: async () => {
        const classCategory = await models.ClassCategory.findAll();
        return classCategory;
    },
    getClassById: async (id) => {
        const classCategory = await models.ClassCategory.findById(id);
        return classCategory;
    },
};