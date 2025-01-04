// src/components/NotFound.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const NotFound = () => {
  return (
    <div className="not-found-container" style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

// Optional: Add some simple styles in JS
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    marginTop: "100px",
  },
  header: {
    fontSize: "48px",
    color: "#ff0000",
  },
  message: {
    fontSize: "20px",
    margin: "20px 0",
  },
  link: {
    fontSize: "18px",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default NotFound;
