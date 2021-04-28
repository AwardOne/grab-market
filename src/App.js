import "./App.css";
import Mainpage from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import Uploadpage from "./upload";
import ProductPage from "./product";
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <Mainpage />
        </Route>
        <Route exact={true} path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <Uploadpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
