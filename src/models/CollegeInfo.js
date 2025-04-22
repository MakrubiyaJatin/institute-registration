const pool = require('../config/db');

module.exports = {
  create: async (institute_id, university_id, degree_type_id) => {
    const result = await pool.query(
      'INSERT INTO college_infos (institute_id, university_id, degree_type_id) VALUES ($1, $2, $3) RETURNING *',
      [institute_id, university_id, degree_type_id]
    );
    return result.rows[0];
  },

  findAll: async (institute_id) => {
    const result = await pool.query(
      'SELECT * FROM college_infos WHERE institute_id = $1',
      [institute_id]
    );
    return result.rows;
  }
};
