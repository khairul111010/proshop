import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/cart/:id" element={<CartScreen />} />
            <Route exact path="/cart" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
