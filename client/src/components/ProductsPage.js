import React from "react";
import { useParams } from "react-router-dom";

function ProductsPage() {
  const { id } = useParams();

  // Products grouped by category id
  const categoryProducts = {
    1: [
      {
        id: 101,
        name: "Tomato",
        price: "Rs. 50/kg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
      },
      {
        id: 102,
        name: "Potato",
        price: "Rs. 40/kg",
        image:
          "https://t4.ftcdn.net/jpg/02/75/77/89/360_F_275778955_xxJe5fQvDy5oXbjupdJ162zLwU4sf3kT.jpg",
      },
      {
        id: 103,
        name: "Cauliflower",
        price: "Rs. 80/kg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Cauliflower.JPG",
      },
    ],
    2: [
      {
        id: 201,
        name: "Apple",
        price: "Rs. 120/kg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
      },
      {
        id: 202,
        name: "Banana",
        price: "Rs. 80/dozen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
      },
      {
        id: 203,
        name: "Mango",
        price: "Rs. 150/kg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
      },
    ],
    3: [
      {
        id: 301,
        name: "Milk",
        price: "Rs. 60/litre",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e6/Glass_of_milk_on_table.jpg",
      },
      {
        id: 302,
        name: "Eggs",
        price: "Rs. 180/dozen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/70/Chicken_Eggs.jpg",
      },
      {
        id: 303,
        name: "Paneer",
        price: "Rs. 400/kg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/43/Paneer_Cubes.jpg",
      },
    ],
    4: [
      {
        id: 401,
        name: "Saffron",
        price: "Rs. 500/gram",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5f/Saffron_Crocus_Stigmas.jpg",
      },
      {
        id: 402,
        name: "Cardamom",
        price: "Rs. 150/50g",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7f/Green_cardamom_pods.jpg",
      },
      {
        id: 403,
        name: "Dry Ginger",
        price: "Rs. 200/100g",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/1e/Dry_Ginger.jpg",
      },
    ],
  };

  const products = categoryProducts[id] || [];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        {products.length > 0
          ? `Products in ${getCategoryName(id)}`
          : "No products found"}
      </h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            {/* Product image with fallback */}
            <img
              src={
                product.image ||
                `https://via.placeholder.com/150?text=${encodeURIComponent(
                  product.name
                )}`
              }
              alt={product.name}
              style={styles.image}
            />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.price}>{product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper to get category name
function getCategoryName(id) {
  const names = {
    1: "Fresh Vegetables",
    2: "Organic Fruits",
    3: "Dairy & Eggs",
    4: "Rare Ingredients",
  };
  return names[id] || "Unknown";
}

const styles = {
  container: {
    padding: "40px 20px",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "25px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  productName: {
    fontSize: "18px",
    margin: "8px 0",
    color: "#333",
  },
  price: {
    fontSize: "16px",
    color: "#555",
  },
  button: {
    marginTop: "12px",
    padding: "10px 16px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ProductsPage;
