const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function createUser(name, email, passwordHash) {
  try {
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
      [name, email, passwordHash]
    );
    return result.insertId;
  } catch (err) {
    console.error('createUser error:', err);
    throw err;
  }
}

async function getUsers({ email, page = 1, limit = 10 }) {
  try {
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const offset = (pageNum - 1) * limitNum;

    let sql = 'SELECT id, name, email, created_at FROM users';
    const params = [];

    if (email) {
      sql += ' WHERE email = ?';
      params.push(email);
    }

    sql += ' ORDER BY id DESC LIMIT ? OFFSET ?';
    params.push(limitNum, offset);

    const [rows] = await pool.query(sql, params);
    return rows;
  } catch (err) {
    console.error('getUsers error:', err);
    throw err;
  }
}


module.exports = { pool, createUser, getUsers };
