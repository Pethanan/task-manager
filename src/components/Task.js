import React, { useContext, useState } from "react";
import "./Task.css";
import tasksCtx from "../store/tasks-ctx";

const Task = ({ task }) => {
  const dueDate = new Date(task.dueDate);
  const dueDateMonth = dueDate.toLocaleString("default", {
    month: "short",
  });
  const dueDateYear = dueDate.getFullYear();
  const dueDateDate = dueDate.getDate();

  const dueDateStr = `${dueDateDate}-${dueDateMonth}-${dueDateYear}`;

  const tasksContext = useContext(tasksCtx);

  const [isChecked, setIsChecked] = useState(false);

  const taskDeleteHandler = () => {
    tasksContext.deleteTask(task.id);
  };

  const checkBoxChangeToggler = () => {
    setIsChecked((prev) => !prev);
    tasksContext.editTask(task.id, !isChecked ? "Completed" : "Pending");
  };

  return (
    <li className="task-item">
      <span>
        <input type="checkbox" onClick={checkBoxChangeToggler} />
      </span>
      <div className="task-name--description">
        <p>{task.name}</p>
        <i>{task.description}</i>
      </div>

      <p>{dueDateStr}</p>
      <p>{task.status}</p>
      <div>
        <button className="del-task__btn" onClick={taskDeleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
