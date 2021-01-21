import { Provider } from "react-redux";
import Products from "./Components/Products";
import store from "./Store/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNewProducts from "./Components/AddNewProducts";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/addnew" component={AddNewProducts} />
            <Route exact path="/edit/:id" component={EditProduct} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
