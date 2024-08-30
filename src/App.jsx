// import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/checkout";
import Footer from "./customer/components/footer/Footer";
import Navigation from "./customer/components/navigation/Navigation";
import Product from "./customer/components/product/Product";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import HomePage from "./customer/pages/homePage/HomePage";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./customer/Routers/CustomerRouters";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*"  element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
