import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/Men" element={<ShopCategory category="Men" />}></Route>
          <Route
            path="/Women"
            element={<ShopCategory category="Women" />}
          ></Route>
          <Route
            path="/Kids"
            element={<ShopCategory category="Kids" />}
          ></Route>

          <Route path="/product" element={<Product />}></Route>
          <Route path=":productId" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
