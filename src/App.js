import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import LoginContainer from "./Login/LoginContainer";

function App() {
  debugger;
  return (
    <div className="App">
      <Route path="/login" component={LoginContainer} />
    </div>
  );
}

export default withRouter(App);
