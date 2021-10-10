import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}
const TodoItem: FC<TodoItemProps> = props => {
  return (
    <div>
      <input type="checkbox" defaultChecked={props.todo.completed} />
      {`${props.todo.id}. ${props.todo.title}`}
    </div>
  );
};

export default TodoItem;
