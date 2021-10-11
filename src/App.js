import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./pages/home-page";
import SearchPage from "./pages/search-page";
import CategoryPage from "./pages/category-page";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/jokes/search" exact sensitive component={SearchPage} />
          <Route
            path="/jokes/random"
            exact
            sensitive
            component={CategoryPage}
          />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
