import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
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
  return <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />;
};

export default TodosPage;
