const { ExamType, CompetitiveExamInfo } = require('../models');

module.exports = {
  createExamRegistration: async (instituteId, data) => {
    return CompetitiveExamInfo.create(
      instituteId,
      data.exam_type_id
    );
  },

  getAllExamTypes: async () => ExamType.findAll()
};
