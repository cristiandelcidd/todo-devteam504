import { Dispatch, FC, SetStateAction } from "react";
import { ImArrowUp } from "react-icons/im";

import ListItem from "./ListItem";
import { ITask } from "../App";

interface Props {
  todoList: ITask[];
  setTodoList: Dispatch<SetStateAction<ITask[]>>;
}

const List: FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <>
      {todoList.length !== 0 ? (
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
