import React from "react";
import recentVisit from "../components/recentVisit";
import ProductList from "../components/ProductList";


const Home = () => {
  return (
    <div className="container">
      <ProductList />
      <recentVisit />
    </div>
  );
};

export default Home;
