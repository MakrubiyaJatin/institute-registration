const { University, DegreeType, CollegeInfo } = require('../models');

module.exports = {
  createCollegeRegistration: async (instituteId, data) => {
    return CollegeInfo.create(
      instituteId,
      data.university_id,
      data.degree_type_id
    );
  },

  getAllUniversities: async () => University.findAll(),
  getAllDegreeTypes: async () => DegreeType.findAll()
};
