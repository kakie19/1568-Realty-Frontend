import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Signin
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/dashboard" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Dashboard
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/faqs" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FAQs
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/property" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Property
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/admin" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
