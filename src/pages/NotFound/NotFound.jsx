import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Oops! Page not found</h2>
        <p>The page you're looking for might have been removed or doesn't exist.</p>
        <Link to="/" className="notfound-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
