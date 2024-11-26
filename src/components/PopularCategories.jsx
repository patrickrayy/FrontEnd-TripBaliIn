import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/PopularCategories.css";

const PopularCategories = () => {
  return (
    <div className="popularCategories">
      <h2 className="title">Our Popular Categories</h2>
      <div className="categoryContainer">
        <Link to="/accommodation" className="category">
          <div className="iconContainer">
            <img src="/assets/images/icon1.png" alt="Accommodation" className="icon" />
          </div>
          <p className="categoryText">Accommodation</p>
        </Link>
        <Link to="/destination" className="category">
          <div className="iconContainer">
            <img src="/assets/images/icon3.png" alt="Destination" className="icon" />
          </div>
          <p className="categoryText">Destination</p>
        </Link>
        <Link to="/transportation" className="category">
          <div className="iconContainer">
            <img src="/assets/images/icon2.png" alt="Transportation" className="icon" />
          </div>
          <p className="categoryText">Transportation</p>
        </Link>
      </div>
    </div>
  );
};

export default PopularCategories;
