const pool = require('../config/db');

module.exports = {
  create: async (institute_id, exam_type_id) => {
    const result = await pool.query(
      'INSERT INTO competitive_exam_infos (institute_id, exam_type_id) VALUES ($1, $2) RETURNING *',
      [institute_id, exam_type_id]
    );
    return result.rows[0];
  },

  findAll: async (institute_id) => {
    const result = await pool.query(
      'SELECT * FROM competitive_exam_infos WHERE institute_id = $1',
      [institute_id]
    );
    return result.rows;
  }
};
