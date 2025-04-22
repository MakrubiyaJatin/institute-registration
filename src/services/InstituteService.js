const Institute = require('../models/Institute');

module.exports = {
  createInstitute: async (name, type) => {
    return Institute.create(name, type);
  },

  getAllInstitutes: async (type) => {
    return Institute.findAll(type);
  }
};
