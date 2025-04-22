const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const result = await pool.query('SELECT * FROM class_categories ORDER BY name');
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query('SELECT * FROM class_categories WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async (name) => {
    const result = await pool.query(
      'INSERT INTO class_categories (name) VALUES ($1) RETURNING *',
      [name]
    );
    return result.rows[0];
  },

  update: async (id, name) => {
    const result = await pool.query(
      'UPDATE class_categories SET name = $1 WHERE id = $2 RETURNING *',
      [name, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query(
      'DELETE FROM class_categories WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};