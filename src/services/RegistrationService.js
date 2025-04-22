const Institute = require('./InstituteService');
const Registration = require('./RegistrationService');

module.exports = {
  createCompleteRegistration: async (registrationData) => {
    const { name, type, ...registrationDetails } = registrationData;
    
    // Validate based on institute type
    switch(type) {
      case 'school':
        if (!registrationDetails.boardId || !registrationDetails.mediumId || 
            !registrationDetails.classCategoryId || !registrationDetails.standardId) {
          throw new Error('Missing required fields for school registration');
        }
        break;
        
      case 'college':
        if (!registrationDetails.universityId || !registrationDetails.degreeId) {
          throw new Error('Missing required fields for college registration');
        }
        break;
        
      case 'competitive_exam':
        if (!registrationDetails.examTypeId) {
          throw new Error('Missing exam type for competitive exam center');
        }
        break;
        
      case 'playhouse':
        // No additional fields required
        break;
    }

    // Create institute
    const institute = await Institute.createInstitute(name, type);
    
    // Create registration
    return Registration.createRegistration(institute.id, {
      ...registrationDetails,
      subjects: registrationDetails.subjects || []
    });
  },

  getFullRegistrationDetails: async (registrationId) => {
    return Registration.getRegistration(registrationId);
  }
};