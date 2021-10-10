import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import EventsExample from "./components/EventsExample";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
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
      <Route path="/users" exact component={UserPage} />
      <Route path="/users/:id" component={UserItemPage} />
      <Route path="/todos" exact component={TodosPage} />
      <Route path="/todos/:id" component={TodoItemPage} />
    </Router>
  );
}

export default App;
