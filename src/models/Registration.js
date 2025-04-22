const pool = require('../config/db');

module.exports = {
  createRegistration: async (instituteId, registrationData) => {
    const {
      boardId,
      mediumId,
      classCategoryId,
      standardId,
      universityId,
      degreeId,
      examTypeId,
      subjects
    } = registrationData;

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      
      // Create main registration
      const registrationRes = await client.query(
        `INSERT INTO registrations (
          institute_id, board_id, medium_id, class_category_id, 
          standard_id, university_id, degree_id, exam_type_id
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [
          instituteId, boardId, mediumId, classCategoryId,
          standardId, universityId, degreeId, examTypeId
        ]
      );
      
      const registration = registrationRes.rows[0];

      // Add subjects if present
      if (subjects && subjects.length > 0) {
        for (const subjectId of subjects) {
          await client.query(
            'INSERT INTO registration_subjects (registration_id, subject_id) VALUES ($1, $2)',
            [registration.id, subjectId]
          );
        }
      }

      await client.query('COMMIT');
      return registration;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },

  getRegistration: async (registrationId) => {
    const res = await pool.query(
      `SELECT r.*, 
        json_agg(s.*) as subjects,
        b.name as board_name,
        m.name as medium_name,
        cc.name as class_category_name,
        std.name as standard_name,
        u.name as university_name,
        d.name as degree_name,
        et.name as exam_type_name
       FROM registrations r
       LEFT JOIN registration_subjects rs ON r.id = rs.registration_id
       LEFT JOIN subjects s ON rs.subject_id = s.id
       LEFT JOIN boards b ON r.board_id = b.id
       LEFT JOIN mediums m ON r.medium_id = m.id
       LEFT JOIN class_categories cc ON r.class_category_id = cc.id
       LEFT JOIN standards std ON r.standard_id = std.id
       LEFT JOIN universities u ON r.university_id = u.id
       LEFT JOIN degrees d ON r.degree_id = d.id
       LEFT JOIN exam_types et ON r.exam_type_id = et.id
       WHERE r.id = $1
       GROUP BY r.id, b.id, m.id, cc.id, std.id, u.id, d.id, et.id`,
      [registrationId]
    );
    return res.rows[0];
  }
};