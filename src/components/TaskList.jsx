const TaskList = ({ tasks, changeTaskDoneById }) => {
  return (
    <ul>
      {tasks.map((task) => {
        const { id, text, done } = task;

        return (
          <li key={id}>
            <input
              type="checkbox"
              checked={done}
              onChange={() => {
                changeTaskDoneById(id);
              }}
            />
            <p style={{ textDecoration: done ? "line-through" : "none" }}>
              {text}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;