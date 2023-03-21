import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import CustomerList from "./pages/customerList/CustomerList";
import Na from "./pages/login/Na";
import { useSelector } from "react-redux";
import ResellerList from "./pages/resellerList/ResellerList";
import Category from "./pages/category/Category";
import ProductsOut from "./pages/productsOut/ProductsOut";
import ProductsIn from "./pages/productsIn/ProductsIn";
import Customer from "./pages/customer/Customer";
import Reseller from "./pages/reseller/Reseller";
import CategoryItem from "./pages/categoryItem/CategoryItem";
import ProductOutItem from "./pages/productOutItem/ProductOutItem";
import NewProductOut from "./pages/newProductOut/NewProductOut";
import NewReseller from "./pages/newReseller/NewReseller";
import NewCustomer from "./pages/newCustomer/NewCustomer";
import NewCategory from "./pages/newCategory/NewCategory";
import ProductInItem from "./pages/productsInItem/ProductInItem";
import NewProductsIn from "./pages/newProductIn/NewProductsIn";
import Register from "./pages/login/Register";

function App() {
  const user = useSelector((state) =>
    state.user.currentUser != null ? true : false
  );
  const admin = useSelector((state) =>
    user ? (state.user.currentUser.isAdmin ? true : false) : false
  );
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/na">{user ? <Na /> : <Redirect to="/login" />}</Route>
        {user ? (
          admin ? (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/products">
                  <ProductList />
                </Route>
                <Route path="/newuser">
                  <NewUser />
                </Route>
                <Route path="/product/:productId">
                  <Product />
                </Route>
                <Route path="/newproduct">
                  <NewProduct />
                </Route>
                <Route path="/user">
                  <User />
                </Route>
                <Route path="/customerlist">
                  <CustomerList />
                </Route>
                <Route path="/customer">
                  <Customer />
                </Route>
                <Route path="/newcustomer">
                  <NewCustomer />
                </Route>
                <Route path="/resellerlist">
                  <ResellerList />
                </Route>
                <Route path="/reseller">
                  <Reseller />
                </Route>
                <Route path="/newreseller">
                  <NewReseller />
                </Route>
                <Route path="/category">
                  <Category />
                </Route>
                <Route path="/categoryitem">
                  <CategoryItem />
                </Route>
                <Route path="/newcategory">
                  <NewCategory />
                </Route>
                <Route path="/productsout">
                  <ProductsOut />
                </Route>
                <Route path="/productsoutitem">
                  <ProductOutItem />
                </Route>
                <Route path="/newproductsout">
                  <NewProductOut />
                </Route>
                <Route path="/productsinitem">
                  <ProductInItem />
                </Route>
                <Route path="/newproductsin">
                  <NewProductsIn />
                </Route>
                <Route path="/productsin">
                  <ProductsIn />
                </Route>
              </div>
            </>
          ) : (
            <Redirect to="/na" />
          )
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
