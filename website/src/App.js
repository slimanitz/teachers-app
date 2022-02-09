import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import SignUpPage from "./pages/sign-up/sign-up-page";
import HomePage from "./pages/home/home-page";
import ProtectedRoute from "./components/protected-route";
import Unauthorized from "./pages/unauthorized/unauthorized";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
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
