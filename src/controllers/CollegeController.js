const collegeService = require('../services/CollegeService');

module.exports = {
  getCollegeOptions: async (req, res) => {
    try {
      const [universities, degrees] = await Promise.all([
        collegeService.getAllUniversities(),
        collegeService.getAllDegreeTypes()
      ]);
      res.json({ universities, degrees });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
