import Header from "../components/header/header";
import Sidebar from "../components/sidebar/SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { mainroutes } from "./main-routes";
import ScrollToTop from "../components/scroll/scrollToTop";

function Main() {
  return (
    <Router>
      <Header headerName="-BlazeBot-" />
      <Sidebar />
      <div className="main">
        <ScrollToTop />
        <Switch>
          {mainroutes.map((route, i) => (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
