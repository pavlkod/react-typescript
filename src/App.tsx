import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import EventsExample from "./components/EventsExample";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </div>
      <Route path="/" exact component={EventsExample} />
      <Route path="/users" component={UserPage} />
      <Route path="/todos" component={TodosPage} />
    </Router>
  );
}

export default App;
