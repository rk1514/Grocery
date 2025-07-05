import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Fresh Vegetables",
      image:
        "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=612x612&w=0&k=20&c=KoF5Ue-g3wO3vXPgLw9e2Qzf498Yow7WGXMSCNz7O60=",
    },
    {
      id: 2,
      name: "Organic Fruits",
      image:
        "https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg?semt=ais_items_boosted&w=740",
    },
    {
      id: 3,
      name: "Dairy",
      image:
        "https://thumbs.dreamstime.com/b/assortment-fresh-dairy-products-milk-cottage-cheese-cheeses-eggs-sour-cream-kitchen-table-concept-natural-nutrition-358189029.jpg",
    },
    {
      id: 4,
      name: "Rare Ingredients",
      image:
        "https://media.istockphoto.com/id/1283712032/photo/cardboard-box-filled-with-non-perishable-foods-on-wooden-table-high-angle-view.jpg?s=612x612&w=0&k=20&c=7B2cUwQB2LeBmIh5JElkO5DoE7GRq-CRVmERsMSJoVY=",
    },
  ];

  return (
    <section id="categories" style={styles.section}>
      <h2 style={styles.title}>Shop by Category</h2>
      <div style={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.id} style={styles.card}>
            <img src={cat.image} alt={cat.name} style={styles.image} />
            <h4 style={styles.name}>{cat.name}</h4>
            <Link to={`/category/${cat.id}`} style={styles.button}>
              View <FaArrowRight style={styles.icon} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: "28px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
  },
  name: {
    margin: "15px 0 10px",
    fontSize: "18px",
    color: "#333",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    marginBottom: "15px",
    cursor: "pointer",
    borderRadius: "4px",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textDecoration: "none",
  },
  icon: {
    fontSize: "14px",
  },
};

export default CategorySection;
