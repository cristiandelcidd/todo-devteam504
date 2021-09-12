import { useState, useEffect } from "react";

import List from "./components/List";

export interface ITask {
  id: number;
  task: string;
}

let initialState: ITask[] = JSON.parse(localStorage.getItem("todoList")!) || [];

function App() {
  const [todoList, setTodoList] = useState<ITask[]>(initialState);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTask = () => {
    if (task.length === 0) {
      return;
    }

    const newTodo: ITask = {
      id: +Math.random().toString().split(".")[1],
      task,
    };

    setTodoList([newTodo, ...todoList]);
    setTask("");
  };

  return (
    <div className='container'>
      <h1>TodoApp DevTeam504</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <input
          className='todo-input'
          type='text'
          name='task'
          id='text'
          autoComplete={"off"}
          value={task}
          onChange={({ target }) => setTask(target.value)}
        />

        <button
          disabled={task.length === 0 ? true : false}
          className='btn btn-primary'
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </form>

      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
