import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ProductList from "./components/ProductList";
import ProductsPage from "./components/ProductsPage";
import SearchPage from "./components/SearchPage";
import PromoBanner from "./components/PromoBanner";
import Testimonials from "./components/Testimonials";
import AboutSection from "./components/AboutSection";
import "./App.css";

// Fallback Pages for Routing (temporary content)
const CategoriesPage = () => <div><h2>All Categories</h2></div>;
const ProductsOnlyPage = () => (
  <div>
    <h2>All Products</h2>
    <ProductList />
  </div>
);
const AboutPage = () => <div><h2>About Us</h2></div>;
const ContactPage = () => <div><h2>Contact Us</h2></div>;
const CartPage = () => <div><h2>Your Cart</h2></div>;
const SignInPage = () => <div><h2>Sign In</h2></div>;
const SignUpPage = () => <div><h2>Sign Up</h2></div>;

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
         <Route
  path="/"
  element={
    <>
      <HeroSection />
      <PromoBanner />
      <CategorySection />
      <ProductList />
      <Testimonials />
      <AboutSection />
    </>
  }
/>

          <Route path="/products" element={<ProductsOnlyPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/category/:id" element={<ProductsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
