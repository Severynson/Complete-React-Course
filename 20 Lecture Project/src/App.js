import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";


/////////////////////////////////////////////////////////////////////////
///////// Author is using an old version of react router so I didn't pass
///////// this section of course, but watched tutorials on youtube about
///////// React-router-dom v6...
/////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
