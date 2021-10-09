import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Card width="200px" height="300px" variant={CardVariant.outlined} onClick={() => console.log('text')}>
        <button>Press</button>
      </Card>
      <UserList users={[]}/>
    </div>
  );
}

export default App;
