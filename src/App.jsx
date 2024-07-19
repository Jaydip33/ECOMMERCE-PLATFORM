import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CartItem from "./Pages/CartItem";
import ProductDetails from "./Pages/ProductDetails";
import { useDispatch } from "react-redux";
import { addProduct } from "./Redux/cartSlice";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";

function App() {
  const dispatch = useDispatch();

  const handleClickAdd = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home handleClickAdd={handleClickAdd} />}
          exact
        />
        <Route path="/blog" element={<Blog />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/cart" element={<CartItem />} exact />
        <Route path="/login" element={<LogIn />} exact />
        <Route path="/signup" element={<Register />} exact />
        <Route
          path="/product/:id"
          element={<ProductDetails handleClickAdd={handleClickAdd} />}
          exact
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
