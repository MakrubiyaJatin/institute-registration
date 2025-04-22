const schoolService = require('../services/SchoolService');

module.exports = {
  getSchoolOptions: async (req, res) => {
    try {
      const [boards, mediums, categories] = await Promise.all([
        schoolService.getAllBoards(),
        schoolService.getAllMediums(),
        schoolService.getClassCategories()
      ]);
      res.json({ boards, mediums, categories });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getStandards: async (req, res) => {
    try {
      const standards = await schoolService.getStandardsByCategory(req.query.category_id);
      res.json(standards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getSubjects: async (req, res) => {
    try {
      const subjects = await schoolService.getSubjectsByStandard(req.query.standard_id);
      res.json(subjects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
