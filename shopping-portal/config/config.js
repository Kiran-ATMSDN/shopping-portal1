
const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shopping-portal',
  password: 'postgres',
  port: 5432, 
});


const createTasksTable = async () => {
  try {

    const query = `
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    

    await pool.query(query);
    
    console.log('Tasks table created (if not exists)');
  } catch (error) {
    console.error('Error creating tasks table:', error);
  }
};


pool.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    createTasksTable(); 
  })
  .catch(error => {
    console.error('Error connecting to PostgreSQL database:', error);
  });

module.exports = pool;
