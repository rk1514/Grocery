import React from "react";

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.heroContent}>
          <h1 style={styles.headline}>🌿 Premium Organic Collection</h1>
          <h3 style={styles.subheadline}>Fresh Products Delivered Daily</h3>
          <p style={styles.description}>
            Discover our handpicked selection of premium organic products from trusted local farmers.
          </p>
          <div style={styles.buttonGroup}>
            <button style={styles.ctaBtn}>Shop Now</button>
            <button style={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    background: `url("https://t3.ftcdn.net/jpg/03/35/61/78/360_F_335617818_D6XfmNhtCyDRTOvK9GXFkNYs3nyLKvfO.jpg") center/cover no-repeat`,
    color: "#fff",
    position: "relative",
    minHeight: "600px", // Increased height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker for more contrast
    width: "100%",
    height: "100%",
    padding: "80px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroContent: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },
  headline: {
    fontSize: "48px", // Bigger headline
    fontWeight: "bold",
    marginBottom: "16px",
    lineHeight: "1.2",
  },
  subheadline: {
    fontSize: "26px",
    marginBottom: "24px",
    fontWeight: "500",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto 32px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  ctaBtn: {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default HeroSection;
