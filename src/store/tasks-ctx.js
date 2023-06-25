import React from "react";

const tasksCtx = React.createContext({
  tasksList: [],
  addTask: (task) => {},
  deleteTask: (taskId) => {},
  editTask: (taskId) => {},
});

export default tasksCtx;
