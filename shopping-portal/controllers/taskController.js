const TaskService = require('../services/taskService');

const TaskController = {};

TaskController.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTask = await TaskService.createTask({ title, description, status });
    res.status(201).json({ status: 201, message: 'Task created successfully', data: newTask });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

TaskController.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.status(200).json({ status: 200, message: 'All tasks retrieved successfully', data: tasks });
  } catch (error) {
    console.error('Error getting all tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

TaskController.getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await TaskService.getTaskById(taskId);
    if (task) {
      res.status(200).json({ status: 200, message: 'Task retrieved successfully', data: task });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error('Error getting task by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

TaskController.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, status } = req.body;
    const updatedTask = await TaskService.updateTask(taskId, { title, description, status });
    if (updatedTask) {
      res.status(200).json({ status: 200, message: 'Task updated successfully', data: updatedTask });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

TaskController.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await TaskService.deleteTask(taskId);
    if (deletedTask) {
      res.status(204).json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = TaskController;
