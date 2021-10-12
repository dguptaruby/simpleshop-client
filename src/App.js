import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home';
import Signin from './autehentication/signin';
import Signup from './autehentication/SignupAdmin';
import SignupAdmin from './autehentication/SignupAdmin';
import SignupUser from './autehentication/Signupuser';
import Admin from './adminPage/Admin';
import AddProduct from './adminPage/Product';
import Regions from './adminPage/Regions';
import Products from './adminPage/products/Products';
import EditOrder from './adminPage/order/EditOrder';
import AllOrder from './adminPage/order/AllOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signupadmin" component={SignupAdmin} />
          <Route exact path="/signupuser" component={SignupUser} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin-product" component={AddProduct} />
          <Route exact path="/admin-region" component={Regions} />
          <Route exact path="/admin-product/products" component={Products} />
          <Route exact path="/editorder" component={EditOrder} />
          <Route exact path="/order" component={AllOrder} />


        </Switch>
      </Router>

    </div>
  );
}

export default App;
