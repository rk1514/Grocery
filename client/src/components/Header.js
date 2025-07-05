import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    }
  };

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest(".nav-menu")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <header style={{ 
      ...styles.header, 
      ...(isScrolled && styles.scrolledHeader)
    }}>
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.logoContainer}>
            <img
              src="https://via.placeholder.com/45"
              alt="Grocenet Logo"
              style={styles.logo}
            />
            <h2 style={styles.brand}>grocenet</h2>
          </div>
        </div>

        <div style={styles.center}>
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <input
              type="text"
              name="search"
              placeholder="Search organic products..."
              style={styles.searchInput}
              aria-label="Search products"
            />
            <button 
              type="submit" 
              style={styles.searchButton}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>

        <div className="nav-menu" style={styles.navContainer}>
          <button 
            style={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <nav style={{
            ...styles.nav,
            ...(isMenuOpen && styles.mobileNavOpen)
          }}>
            <a href="#categories" style={styles.link}>Categories</a>
            <a href="#products" style={styles.link}>Products</a>
            <a href="#about" style={styles.link}>About</a>
            <a href="#contact" style={styles.link}>Contact</a>
            <a href="#cart" style={styles.iconLink} aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </a>
            <div style={styles.authButtons}>
              <button style={styles.btnLight}>Sign In</button>
              <button style={styles.btnDark}>Sign Up</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#2e7d32",
    padding: "10px 5%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  scrolledHeader: {
    padding: "8px 5%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1400px",
  },
  left: {
    flex: "1 1 auto",
    minWidth: "120px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logo: {
    height: "45px",
    width: "45px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid rgba(255,255,255,0.3)",
  },
  brand: {
    margin: 0,
    fontSize: "1.6rem",
    fontWeight: 700,
    letterSpacing: "0.8px",
    background: "linear-gradient(to right, #e8f5e9, #c8e6c9)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  center: {
    flex: "1 1 auto",
    minWidth: "200px",
    maxWidth: "600px",
    margin: "0 20px",
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  searchInput: {
    padding: "10px 16px",
    borderRadius: "30px 0 0 30px",
    border: "none",
    width: "100%",
    fontSize: "1rem",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
    backgroundColor: "#f5f5f5",
    transition: "all 0.3s ease",
  },
  searchButton: {
    padding: "10px 18px",
    border: "none",
    backgroundColor: "#1b5e20",
    color: "white",
    fontSize: "1rem",
    borderRadius: "0 30px 30px 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  navContainer: {
    position: "relative",
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "flex-end",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    transition: "all 0.3s ease",
  },
  link: {
    color: "rgba(255,255,255,0.9)",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "6px 4px",
    borderBottom: "2px solid transparent",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
  },
  iconLink: {
    color: "white",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "5px",
    borderRadius: "50%",
    transition: "all 0.2s ease",
  },
  authButtons: {
    display: "flex",
    gap: "12px",
    marginLeft: "5px",
  },
  btnLight: {
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255,0.7)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
  },
  btnDark: {
    backgroundColor: "white",
    color: "#2e7d32",
    padding: "8px 18px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 600,
    transition: "all 0.2s ease",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    whiteSpace: "nowrap",
  },
  menuButton: {
    display: "none",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "8px",
  },
  
  // Media queries
  "@media (max-width: 900px)": {
    nav: {
      position: "absolute",
      top: "100%",
      right: "0",
      backgroundColor: "#2e7d32",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px",
      borderRadius: "0 0 0 10px",
      boxShadow: "-5px 5px 15px rgba(0,0,0,0.2)",
      gap: "15px",
      opacity: 0,
      pointerEvents: "none",
      transform: "translateY(-10px)",
    },
    mobileNavOpen: {
      opacity: 1,
      pointerEvents: "all",
      transform: "translateY(0)",
    },
    authButtons: {
      flexDirection: "column",
      width: "100%",
      marginTop: "10px",
    },
    menuButton: {
      display: "block",
    },
    link: {
      padding: "8px 0",
    },
  },
  "@media (max-width: 768px)": {
    container: {
      flexWrap: "wrap",
    },
    center: {
      order: 3,
      minWidth: "100%",
      margin: "10px 0 0 0",
    },
  },
  "@media (max-width: 480px)": {
    header: {
      padding: "8px 4%",
    },
    brand: {
      fontSize: "1.4rem",
    },
    logo: {
      height: "38px",
      width: "38px",
    },
  },
};

// Apply media queries
const mediaQueries = {
  "@media (max-width: 900px)": {},
  "@media (max-width: 768px)": {},
  "@media (max-width: 480px)": {},
};

// Merge styles with media queries
Object.keys(mediaQueries).forEach(query => {
  styles[query] = {
    ...styles[query],
    ...mediaQueries[query]
  };
});

export default Header;
