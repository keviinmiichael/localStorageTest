import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTaskForm = ({ addTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // Creamos un objeto con los datos de la nueva tarea que queremos añadir
        const newTask = {
          id: uuidv4(),
          text: newTaskText,
          done: false,
        };

        // Añadimos la nueva tarea al estado
        addTask(newTask);

        // Vaciamos el input después de añadir la tarea nueva
        setNewTaskText("");
      }}
    >
      <label htmlFor="newTask">Nueva tarea:</label>
      <input
        id="newTask"
        maxLength="100"
        required
        value={newTaskText}
        onChange={(event) => {
          setNewTaskText(event.target.value);
        }}
      />

      <button>Crear tarea</button>
    </form>
  );
};

export default NewTaskForm;