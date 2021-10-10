import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const history = useHistory();
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
        setTodos(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchTodos();
  }, []);
  const clickTodo = (todo: ITodo) => {
    history.push(`/todos/${todo.id}`);
  };
  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem onClick={clickTodo} key={todo.id} todo={todo} />} />
  );
};

export default TodosPage;
