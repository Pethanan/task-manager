import React, { useContext } from "react";
import tasksCtx from "../store/tasks-ctx";
import Task from "./Task";
import "./TasksList.css";

const TasksList = () => {
  const tasksContext = useContext(tasksCtx);
  const tasksList = tasksContext.tasksList.map((task) => (
    <Task key={task.id} task={task}></Task>
  ));

  return (
    <div className="tasks-list__container">
      <header className="tasks-list">
        <p>Status</p>
        <p>Task Name</p>
        <p>Due Date</p>
        <p>Status</p>
        <p>Delete</p>
      </header>
      {tasksList && tasksList}
      {tasksList.length === 0 && (
        <p style={{ paddingTop: "10px" }}>
          No task Added. Add some task to the list
        </p>
      )}
    </div>
  );
};

export default TasksList;
