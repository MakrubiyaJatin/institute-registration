const instituteService = require('../services/InstituteService');
const schoolService = require('../services/SchoolService');
const collegeService = require('../services/CollegeService');
const examService = require('../services/ExamService');

module.exports = {
  createInstitute: async (req, res) => {
    try {
      const { name, type, schoolData, collegeData, examData } = req.body;
      const institute = await instituteService.createInstitute(name, type);

      switch(type) {
        case 'school':
          await schoolService.createSchoolRegistration(institute.id, schoolData);
          break;
        case 'college':
          await collegeService.createCollegeRegistration(institute.id, collegeData);
          break;
        case 'competitive_exam':
          await examService.createExamRegistration(institute.id, examData);
          break;
      }

      res.status(201).json(institute);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getInstitutes: async (req, res) => {
    try {
      const institutes = await instituteService.getAllInstitutes(req.query.type);
      res.json(institutes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
