import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
      } catch (e) {
        console.error(e);
      }
    }
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(data)
      } catch (e) {
        console.error(e);
      }
    }
    fetchUsers()
    fetchTodos()
  }, [])
  return (
    <div className="App">
      <Card width="200px" height="300px" variant={CardVariant.outlined} onClick={() => console.log('text')}>
        <button>Press</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </div>
  );
}

export default App;
