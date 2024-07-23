import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import CartItem from "./Pages/CartItem";
import LogIn from "./Pages/LogIn";
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import { addProduct } from "./Redux/cartSlice";
import { useAuth } from "./Context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  console.log("authUser", authUser);

  const dispatch = useDispatch();

  const handleClickAdd = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <Router>
      <NavBar />
      {authUser ? (
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
      ) : (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
}

export default App;
