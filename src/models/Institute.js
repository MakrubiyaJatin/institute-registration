const pool = require('../config/db');

module.exports = {
  create: async (name, type) => {
    const result = await pool.query(
      'INSERT INTO institutes (name, type) VALUES ($1, $2) RETURNING *',
      [name, type]
    );
    return result.rows[0];
  },

  findAll: async (type) => {
    let query = 'SELECT * FROM institutes';
    const params = [];
    
    if (type) {
      query += ' WHERE type = $1';
      params.push(type);
    }
    
    const result = await pool.query(query, params);
    return result.rows;
  }
};
