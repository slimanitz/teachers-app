import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import SignUpPage from "./pages/sign-up/sign-up-page";
import HomePage from "./pages/home/home-page";
import Unauthorized from "./pages/unauthorized/unauthorized";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:5000/api/v1";
  axios.defaults.withCredentials = true;
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route path="*">
          For 404 page
          <NoMatch />
        </Route> */}

        <Route exact path="/unauthorized" component={Unauthorized} />
      </Switch>
    </Router>
  );
}

// isAuthenticated = async () => {
//   return await fetch(`<your domain>/isAuth`, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .catch((err) => console.log(err));
// };

export default App;
