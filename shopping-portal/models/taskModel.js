const pool = require('../config/config');

const Task = {};

Task.createTask = async (taskData) => {
  try {
    const { title, description, status } = taskData;
    const query = {
      text: 'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *',
      values: [title, description, status]
    };
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

Task.getAllTasks = async () => {
  try {
    const query = 'SELECT * FROM tasks';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

Task.getTaskById = async (taskId) => {
  try {
    const query = {
      text: 'SELECT * FROM tasks WHERE id = $1',
      values: [taskId]
    };
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

Task.updateTask = async (taskId, taskData) => {
  try {
    const { title, description, status } = taskData;
    const query = {
      text: 'UPDATE tasks SET title = $1, description = $2, status = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
      values: [title, description, status, taskId]
    };
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

Task.deleteTask = async (taskId) => {
  try {
    const query = {
      text: 'DELETE FROM tasks WHERE id = $1 RETURNING *',
      values: [taskId]
    };
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = Task;
