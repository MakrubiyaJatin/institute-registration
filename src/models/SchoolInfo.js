const pool = require('../config/db');

module.exports = {
  create: async (institute_id, board_id, medium_id, class_category_id) => {
    const result = await pool.query(
      'INSERT INTO school_infos (institute_id, board_id, medium_id, class_category_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [institute_id, board_id, medium_id, class_category_id]
    );
    return result.rows[0];
  },

  addStandardSubjects: async (school_info_id, standard_id, subject_ids) => {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      for (const subject_id of subject_ids) {
        await client.query(
          'INSERT INTO school_standard_subjects (school_info_id, standard_id, subject_id) VALUES ($1, $2, $3)',
          [school_info_id, standard_id, subject_id]
        );
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },

  findAll: async (institute_id) => {
    const result = await pool.query(
      'SELECT * FROM school_infos WHERE institute_id = $1',
      [institute_id]
    );
    return result.rows;
  }
};
