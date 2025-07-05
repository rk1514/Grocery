import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Anjali Sharma",
      comment:
        "The vegetables are always fresh and delivered on time. I love shopping here!",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      name: "Rahul Verma",
      comment:
        "Excellent service and quality. Highly recommend this grocery platform.",
      avatar:
        "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      name: "Priya Patel",
      comment:
        "Great selection of organic fruits. My family is very happy with the products.",
      avatar:
        "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What Our Customers Say</h2>
      <div style={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.id} style={styles.card}>
            <img src={t.avatar} alt={t.name} style={styles.avatar} />
            <p style={styles.comment}>"{t.comment}"</p>
            <h4 style={styles.name}>{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "40px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },
  comment: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "12px",
  },
  name: {
    fontSize: "17px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default Testimonials;
