import React from "react";
import { useLocation } from "react-router-dom";

// ✅ Replace or extend this with your real products
const allProducts = [
  // Vegetables
  {
    id: 1,
    name: "Tomato",
    price: 50,
    image: "https://via.placeholder.com/150?text=Tomato",
  },
  {
    id: 2,
    name: "Potato",
    price: 40,
    image: "https://via.placeholder.com/150?text=Potato",
  },
  {
    id: 3,
    name: "Carrot",
    price: 60,
    image: "https://via.placeholder.com/150?text=Carrot",
  },
  {
    id: 4,
    name: "Broccoli",
    price: 70,
    image: "https://via.placeholder.com/150?text=Broccoli",
  },
  // Fruits
  {
    id: 5,
    name: "Apple",
    price: 120,
    image: "https://via.placeholder.com/150?text=Apple",
  },
  {
    id: 6,
    name: "Banana",
    price: 30,
    image: "https://via.placeholder.com/150?text=Banana",
  },
  {
    id: 7,
    name: "Mango",
    price: 150,
    image: "https://via.placeholder.com/150?text=Mango",
  },
  // Dairy & Eggs
  {
    id: 8,
    name: "Milk",
    price: 80,
    image: "https://via.placeholder.com/150?text=Milk",
  },
  {
    id: 9,
    name: "Eggs",
    price: 90,
    image: "https://via.placeholder.com/150?text=Eggs",
  },
  {
    id: 10,
    name: "Paneer",
    price: 200,
    image: "https://via.placeholder.com/150?text=Paneer",
  },
  // Rare Ingredients
  {
    id: 11,
    name: "Quinoa",
    price: 300,
    image: "https://via.placeholder.com/150?text=Quinoa",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Curd",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  {
    id: 12,
    name: "Chia Seeds",
    price: 250,
    image: "https://via.placeholder.com/150?text=Chia+Seeds",
  },
  
];

function SearchPage() {
  
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const results = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for: "{query}"</h2>

      {results.length > 0 ? (
        <div style={styles.grid}>
          {results.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.image} />
              <h4>{product.name}</h4>
              <p>Rs. {product.price}</p>
              <button style={styles.button}>Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  button: {
    background: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "8px",
  },
};

export default SearchPage;
