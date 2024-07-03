import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Welcome to Our Website</h1>
      <p>Explore various sections of our site to learn more.</p>
      <Link to="/china" className="text-blue-500 underline">Learn more about China</Link>
    </div>
  );
};

export default Index;
