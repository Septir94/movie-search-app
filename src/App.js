import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";

function App() {
  let history = useHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/:type" exact component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
