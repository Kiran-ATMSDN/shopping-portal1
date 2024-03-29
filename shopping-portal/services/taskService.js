const Task = require('../models/taskModel');

const TaskService = {};

TaskService.createTask = async (taskData) => {
  try {
    const newTask = await Task.createTask(taskData);
    return newTask;
  } catch (error) {
    throw error;
  }
};

TaskService.getAllTasks = async () => {
  try {
    const allTasks = await Task.getAllTasks();
    return allTasks;
  } catch (error) {
    throw error;
  }
};

TaskService.getTaskById = async (taskId) => {
  try {
    const task = await Task.getTaskById(taskId);
    return task;
  } catch (error) {
    throw error;
  }
};

TaskService.updateTask = async (taskId, taskData) => {
  try {
    const updatedTask = await Task.updateTask(taskId, taskData);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};


TaskService.deleteTask = async (taskId) => {
  try {
    const deletedTask = await Task.deleteTask(taskId);
    if (deletedTask) {
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    throw error;
  }
};
  
module.exports = TaskService;
