import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhone } from "react-icons/fa";

function AboutSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Grocenet</h2>
        <p style={styles.text}>
          <strong>Grocenet</strong> is your trusted platform for farm-fresh organic groceries delivered straight to your doorstep.
          We work closely with local farmers and sustainable producers to ensure that your food is healthy, pure, and responsibly sourced.
        </p>

        <div style={styles.features}>
          <div style={styles.feature}>
            🥬 <h4>Fresh & Organic</h4>
            <p>All products are naturally grown with no chemicals.</p>
          </div>
          <div style={styles.feature}>
            🚚 <h4>Fast Delivery</h4>
            <p>Morning doorstep delivery within Kathmandu Valley.</p>
          </div>
          <div style={styles.feature}>
            🤝 <h4>Supporting Farmers</h4>
            <p>We help farmers earn better through direct sales.</p>
          </div>
        </div>

        <div style={styles.socials}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.socialLink, backgroundColor: "#3b5998" }}
          >
            <FaFacebookF style={styles.icon} /> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.socialLink, backgroundColor: "#e4405f" }}
          >
            <FaInstagram style={styles.icon} /> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.socialLink, backgroundColor: "#55acee" }}
          >
            <FaTwitter style={styles.icon} /> Twitter
          </a>
          <a
            href="tel:+9779800000000"
            style={{ ...styles.socialLink, backgroundColor: "#4caf50" }}
          >
            <FaPhone style={styles.icon} /> Call Us
          </a>
          <a
            href="https://wa.me/9779800000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.socialLink, backgroundColor: "#25d366" }}
          >
            <FaWhatsapp style={styles.icon} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "linear-gradient(to right, #e8f5e9, #f1f8e9)",
    padding: "60px 20px",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#388e3c",
  },
  text: {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#333",
    marginBottom: "40px",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "40px",
  },
  feature: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "280px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.3s",
  },
  socials: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
    transition: "transform 0.2s, background-color 0.2s",
  },
  icon: {
    fontSize: "18px",
  },
};

export default AboutSection;
