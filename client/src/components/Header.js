import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css"; // we'll define styles here

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      e.target.reset();
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="left">
          <img src="https://via.placeholder.com/45" alt="Logo" className="logo" />
          <h2 className="brand">grocenet</h2>
        </div>
        <form onSubmit={handleSearch} className="search-form">
          <input type="text" name="search" placeholder="Search organic products..." />
          <button type="submit">Search</button>
        </form>
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#instant-delivery">Instant Delivery</a>
          <a href="#24-hour-delivery">24 Hours Delivery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cart" className="cart-icon">🛒</a>
          <button className="btn-light">Sign In</button>
          <button className="btn-dark">Sign Up</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
