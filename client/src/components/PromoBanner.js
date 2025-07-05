import React from "react";

function PromoBanner() {
  return (
    <div style={styles.banner}>
      <h3 style={styles.text}>
        🎉 Special Offer! Get <strong>20% OFF</strong> your first order.
      </h3>
      <p style={styles.subtext}>
        Use code <strong>WELCOME20</strong> at checkout. Hurry—offer ends soon!
      </p>
      <button style={styles.button}>Shop Now</button>
    </div>
  );
}

const styles = {
  banner: {
    backgroundColor: "#ff9800",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "6px",
    margin: "20px auto",
    maxWidth: "800px",
  },
  text: {
    fontSize: "20px",
    margin: "0 0 8px 0",
  },
  subtext: {
    fontSize: "16px",
    margin: "0 0 12px 0",
  },
  button: {
    backgroundColor: "#fff",
    color: "#ff9800",
    border: "none",
    padding: "10px 18px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default PromoBanner;
