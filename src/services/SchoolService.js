const {
  Board, Medium, ClassCategory, Standard, Subject, SchoolInfo
} = require('../models');

module.exports = {
  createSchoolRegistration: async (instituteId, data) => {
    const schoolInfo = await SchoolInfo.create(
      instituteId,
      data.board_id,
      data.medium_id,
      data.class_category_id
    );

    for (const std of data.standards) {
      await SchoolInfo.addSubjects(
        schoolInfo.id,
        std.standard_id,
        std.subject_ids
      );
    }

    return schoolInfo;
  },

  getAllBoards: async () => Board.findAll(),
  getAllMediums: async () => Medium.findAll(),
  getClassCategories: async () => ClassCategory.findAll(),
  getStandardsByCategory: async (categoryId) => Standard.findByCategory(categoryId),
  getSubjectsByStandard: async (standardId) => Subject.findByStandard(standardId)
};
