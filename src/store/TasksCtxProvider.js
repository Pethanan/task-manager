import React, { useState } from "react";
import tasksCtx from "./tasks-ctx";

const TasksCtxProvider = (props) => {
  const [tasksList, setTasksList] = useState([]);

  const addTaskHandler = (task) => {
    setTasksList((prevTasksList) => [...prevTasksList, task]);
  };

  const deleteTaskHandler = (taskId) => {
    console.log(tasksList);
    const currentTasksList = tasksList.filter((task) => task.id !== taskId);
    console.log(currentTasksList);

    const upatedTasksList = [...currentTasksList];
    setTasksList(upatedTasksList);
  };

  const editTaskHandler = (taskId, status) => {
    const taskToBeUpdatedIndex = tasksList.findIndex(
      (task) => task.id === taskId
    );
    const taskToBeUpdated = tasksList[taskToBeUpdatedIndex];
    const updatedTask = { ...taskToBeUpdated, status: status };
    const currentTasksList = [...tasksList];
    currentTasksList[taskToBeUpdatedIndex] = updatedTask;
    const updatedTasksList = [...currentTasksList];
    setTasksList(updatedTasksList);
  };

  const ctxValue = {
    tasksList: tasksList,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
    editTask: editTaskHandler,
  };

  return (
    <tasksCtx.Provider value={ctxValue}>{props.children}</tasksCtx.Provider>
  );
};

export default TasksCtxProvider;
