import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/na" element={user ? <Na /> : <Navigate to="/login" />} />
        {user ? (
          admin ? (
            <>
                <Route exact path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/customerlist" element={<CustomerList />} />
                <Route path="/customer/:id" element={<Customer />} />
                <Route path="/newcustomer" element={<NewCustomer />} />
                <Route path="/resellerlist" element={<ResellerList />} />
                <Route path="/reseller/:id" element={<Reseller />} />
                <Route path="/newreseller" element={<NewReseller />} />
                <Route path="/category" element={<Category />} />
                <Route path="/categoryitem/:id" element={<CategoryItem />} />
                <Route path="/newcategory" element={<NewCategory />} />
                <Route path="/productsout" element={<ProductsOut />} />
                <Route path="/productsoutitem/:id" element={<ProductOutItem />} />
                <Route path="/newproductsout" element={<NewProductOut />} />
                <Route path="/productsinitem/:id" element={<ProductInItem />} />
                <Route path="/newproductsin" element={<NewProductsIn />} />
                <Route path="/productsin" element={<ProductsIn />} />
            </>
          ) : (
            <Navigate to="/na" />
          )
        ) : (
          <Navigate to="/login" />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
