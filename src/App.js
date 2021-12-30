import { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import AddPostContainer from "./component/AddPost/AddPostContainer";
import HomeContainer from "./component/Home/HomeContainer";
import Loader from "./component/Loader/Loader";
import LoginContainer from "./component/Login/LoginContainer";
import SignUpContainer from "./component/SignUp/SignUpContainer";

import { authMe } from "./redux/authReducer";

const App = ({ authMe, isAppFetching }) => {
  useEffect(() => {
    authMe();
  }, [authMe]);

  return isAppFetching ? (
    <Loader />
  ) : (
    <div className="App">
      <Switch>
        <Route exact path="/login" render={() => <LoginContainer />} />
        <Route exact path="/signUp" render={() => <SignUpContainer />} />
        <Route exact path="/" render={() => <HomeContainer />} />
        <Route exact path="/add-post" render={() => <AddPostContainer />} />
        <Route path="*">
          <div>Error 404</div>
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(
  connect(
    (state) => ({
      isAppFetching: state.auth.isAppFetching,
    }),
    {
      authMe,
    }
  )(App)
);
