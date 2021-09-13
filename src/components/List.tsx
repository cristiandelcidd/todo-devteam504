import { Dispatch, FC, SetStateAction } from "react";
import Swal from "sweetalert2";
import { ImArrowUp } from "react-icons/im";
import { TiDelete } from "react-icons/ti";

import ListItem from "./ListItem";
import { ITask } from "../App";

interface Props {
  todoList: ITask[];
  setTodoList: Dispatch<SetStateAction<ITask[]>>;
}

const List: FC<Props> = ({ todoList, setTodoList }) => {
  const handleDeleteAllTasks = () => {
    Swal.fire({
      title: "Delete all your tasks?",
      text: "Are you sure?",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your tasks have been deleted.", "success");
        setTodoList([]);
      }
    });
  };

  return (
    <>
      {todoList.length !== 0 ? (
        <>
          <ul className='todo-list'>
            {todoList.map((todoItem) => (
              <ListItem
                key={todoItem.id}
                todoItem={todoItem}
                setTodoList={setTodoList}
                todoList={todoList}
              />
            ))}
          </ul>
          <button className='btn btn-danger' onClick={handleDeleteAllTasks}>
            Delete all tasks <TiDelete />
          </button>
        </>
      ) : (
        <div className='todo-tip'>
          <span>
            <ImArrowUp />
          </span>
          <h2>Add a new task</h2>
        </div>
      )}
    </>
  );
};

export default List;
