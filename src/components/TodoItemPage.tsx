import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { ITodo } from "../types/types";

interface TodoItemPageParams {
  id: string;
}
const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState({} as ITodo);
  const { id } = useParams<TodoItemPageParams>();

  const history = useHistory();
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data } = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
        setTodo(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchTodo();
  }, []);
  return (
    <div>
      <h1>{todo.title}</h1>
      {JSON.stringify(todo, null, 2)}
      <div style={{ color: todo.completed ? "green" : "red" }}>{todo.completed ? "completed" : "uncompleted"}</div>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default TodoItemPage;
