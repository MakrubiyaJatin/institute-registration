// controllers/RegistrationController.js
const registrationService = require('../services/RegistrationService');

module.exports = {
  createRegistration: async (req, res) => {
    try {
      const registration = await registrationService.createCompleteRegistration(req.body);
      res.status(201).json(registration);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getRegistration: async (req, res) => {
    try {
      const registration = await registrationService.getFullRegistrationDetails(req.params.id);
      res.json(registration);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};