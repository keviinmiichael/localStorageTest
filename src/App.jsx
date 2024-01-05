import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const changeTaskDoneById = (id) => {
    const taskToChange = tasks.find((task) => task.id === id);

    taskToChange.done = !taskToChange.done;

    setTasks([...tasks]);
  };

  useEffect(() => {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <h1>Ejercicio tareas</h1>

      <NewTaskForm addTask={addTask} />

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} changeTaskDoneById={changeTaskDoneById} />
      ) : (
        <p>No has creado tareas todavía</p>
      )}
    </>
  );
}

export default App;