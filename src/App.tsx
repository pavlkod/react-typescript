import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
      } catch (e) {
        console.error(e);
      }
    }
    fetchUsers()
  }, [])
  return (
    <div className="App">
      <Card width="200px" height="300px" variant={CardVariant.outlined} onClick={() => console.log('text')}>
        <button>Press</button>
      </Card>
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
