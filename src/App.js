import "./App.css";
import { Header, NavBar, ProductsList } from "components";

const App = () => (
  <div className="App">
    <Header />
    <NavBar />
    <div className="App__content">
      <ProductsList />
    </div>
  </div>
);

export default App;
