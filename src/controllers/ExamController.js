const examService = require('../services/ExamService');

module.exports = {
  getExamOptions: async (req, res) => {
    try {
      const examTypes = await examService.getAllExamTypes();
      res.json(examTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
