import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoAdd() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleTodoDelete(index) {
    const newTodos = [...todos];
    const completedTask = newTodos.splice(index, 1);
    setTodos(newTodos);
    setCompletedTasks([...completedTasks, completedTask]);
  }

  function renderTodos() {
    return todos.map((todo, index) => (
      <div key={index}>
        <span>{todo}</span>
        <button onClick={() => handleTodoDelete(index)}>Delete</button>
      </div>
    ));
  }

  function renderCompletedTasks() {
    return completedTasks.map((task, index) => (
      <div key={index}>
        <del>{task}</del>
      </div>
    ));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button onClick={handleNewTodoAdd}>Add</button>
      </div>
      <h2>Tasks</h2>
      {renderTodos()}
      <h2>Completed Tasks</h2>
      {renderCompletedTasks()}
    </div>
  );
}

export default TodoList;