import "./App.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import TasksCtxProvider from "./store/TasksCtxProvider";

function App() {
  return (
    <div className="app">
      <header className="app-header">Pethanan Task Manager</header>
      <TasksCtxProvider>
        <TaskForm />
        <TasksList />
      </TasksCtxProvider>
    </div>
  );
}

export default App;
