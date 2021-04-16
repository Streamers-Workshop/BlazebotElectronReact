import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./index.jsx";
import MainPage from "./private-view/main";
import { mainroutes } from "./private-view/main-routes";

function App() {
  const mainpaths = mainroutes.path;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path={mainpaths} component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
