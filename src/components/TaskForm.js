import React, { useContext, useState } from "react";
import tasksCtx from "../store/tasks-ctx";
import "./TaskForm.css";

const TaskForm = () => {
  const tasksContext = useContext(tasksCtx);

  const [addTaskEnable, setAddTaskEnable] = useState(false);

  const [taskFormInputs, setTaskFormInputs] = useState({
    name: "",
    description: "",
    dueDate: new Date(),
    status: "pending",
  });

  const addTaskEnableToggler = () => {
    setAddTaskEnable((prev) => !prev);
  };

  const taskFormInputChangeHandler = (e) => {
    setTaskFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const taskFormSubmitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const task = { ...taskFormInputs, id };
    tasksContext.addTask(task);
    setTaskFormInputs({
      name: "",
      description: "",
      dueDate: new Date(),
      status: "pending",
    });
  };

  return (
    <div className="task-form-container">
      <div className="add-task-form__enable-btn-container">
        <button className="add-task-enable-btn" onClick={addTaskEnableToggler}>
          Add a Task
        </button>
      </div>
      {addTaskEnable && (
        <form className="task-form" onSubmit={taskFormSubmitHandler}>
          <label htmlFor="name" className="task-form__label">
            Task Name
          </label>
          <input
            type="text"
            placeholder="task name"
            className="task-form__controls"
            name="name"
            value={taskFormInputs.name}
            onChange={taskFormInputChangeHandler}
            required
          />
          <label htmlFor="description" className="task-form__label">
            Description
          </label>
          <input
            type="text"
            placeholder="description"
            name="description"
            className="task-form__controls"
            value={taskFormInputs.description}
            onChange={taskFormInputChangeHandler}
            required
          />
          <label htmlFor="dueDate" className="task-form__label">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            className="task-form__controls"
            value={taskFormInputs.dueDate}
            onChange={taskFormInputChangeHandler}
            required
          />
          <div className="task-form__btn-container">
            <button type="submit">Add Task</button>
            <button
              className="add-task__cancel-btn"
              onClick={addTaskEnableToggler}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;
