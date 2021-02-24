import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, NavBar, ProductsList, ProductDetails } from "components";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <NavBar />
      <div className="App__content">
        <Switch>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <ProductsList />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
