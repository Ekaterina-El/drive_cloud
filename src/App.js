import { Switch, withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeContainer from "./component/Home/HomeContainer";

import LoginContainer from "./component/Login/LoginContainer";

function App() {
  debugger;
  return (
    <div className="App">
      <Switch>
      <Route exact path="/login" render={() => <LoginContainer />} />
      <Route exact path="/" render={() => <HomeContainer />} />
      <Route path="*">
        <div>Error 404</div>
      </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
