const { Task } = require("../models");

module.exports = {
  async getTasks(req, res) {
    try {
      const tasks = await Task.findAll({});
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
  async createTask(req, res) {
    try {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error });
    }
  },
  async updateTask(req, res) {
    try {
      const [rowsUpdated] = await Task.update(req.body, {
        where: { id: req.params.id },
      });
      if (rowsUpdated) {
        res.status(200).json({ message: "Task updated successfully" });
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
};
