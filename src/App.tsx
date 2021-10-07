import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div className="App">
      <Card width="200px" height="300px" variant={CardVariant.outlined}>
        <button>Press</button>
      </Card>
      <Card width="200px" height="300px" variant={CardVariant.primary}>
        <button>Press</button>
      </Card>
    </div>
  );
}

export default App;
