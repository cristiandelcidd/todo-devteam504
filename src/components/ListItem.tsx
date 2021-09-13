import { Dispatch, FC, SetStateAction } from "react";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

import { ITask } from "../App";

interface Props {
  todoItem: ITask;
  setTodoList: Dispatch<SetStateAction<ITask[]>>;
  todoList: ITask[];
}

const ListItem: FC<Props> = ({ todoItem, setTodoList, todoList }) => {
  const handleDeleteItem = () => {
    Swal.fire({
      title: `Delete (${todoItem.task})?`,
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
        const newTodoList = todoList.filter((item) => item.id !== todoItem.id);
        setTodoList(newTodoList);
      }
    });
  };

  return (
    <li className='todo-list__item'>
      <p>{todoItem.task}</p>
      <BsTrash className='todo-list__delete' onClick={handleDeleteItem} />
    </li>
  );
};

export default ListItem;
