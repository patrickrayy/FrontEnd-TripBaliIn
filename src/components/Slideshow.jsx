import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"; // Import Carousel dari react-bootstrap

const Slideshow = () => {
  return ( // Tambahkan return untuk memastikan JSX dikembalikan
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <div className="carousel-img-container">
            <img
              className="d-block w-100 carousel-img"
              src="/assets/images/showcase-1.png"
              alt="First slide"
            />
            {/* Filters di dalam carousel */}
            <div className="filters">
              <div className="filter-container">
                {/* Location Filter */}
                <div className="filter-option">
                  <div className="filter-icon">
                    <img src="/assets/images/Location.png" alt="Location Icon" className="icon-img" />
                  </div>
                  <div className="filter-text">
                    <span className="filter-label">Location</span>
                    <span className="filter-desc">
                      Where do you want to go?
                      <button className="arrow-button">
                        <img src="/assets/images/yellowarrow.png" alt="Arrow Icon" className="arrow-icon" />
                      </button>
                    </span>
                  </div>
                </div>

                {/* Date Filter */}
                <div className="filter-option">
                  <div className="filter-icon">
                    <img src="/assets/images/Calendar.png" alt="Calendar Icon" className="icon-img" />
                  </div>
                  <div className="filter-text">
                    <span className="filter-label">Date</span>
                    <span className="filter-desc">
                      Choose date
                      <button className="arrow-button">
                        <img src="/assets/images/yellowarrow.png" alt="Arrow Icon" className="arrow-icon" />
                      </button>
                    </span>
                  </div>
                </div>

                {/* Filter Option */}
                <div className="filter-option">
                  <div className="filter-icon">
                    <img src="/assets/images/Bill.png" alt="Filter Icon" className="icon-img" />
                  </div>
                  <div className="filter-text">
                    <span className="filter-label">Filter</span>
                    <span className="filter-desc">
                      Choose your budget
                      <button className="arrow-button">
                        <img src="/assets/images/yellowarrow.png" alt="Arrow Icon" className="arrow-icon" />
                      </button>
                    </span>
                  </div>
                </div>

                {/* Explore Now Button */}
                <button className="explore-button">
                  <img src="/assets/images/LocationOn.png" alt="Explore Icon" className="explore-icon" />
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* CSS inline */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .carousel-img-container {
          position: relative;
        }

        .carousel-img {
          width: 100%;
          height: 890px; 
          object-fit: cover;
        }

        .filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #CFE9FF;
          padding: 15px;
          border-radius: 10px;
          gap: 20px;
          width: 1440px;
          height: 75px;
          margin: 0 auto;
          position: relative;
          top: -120px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          pointer-events: none;
        }

        .filter-container {
          display: flex;
          flex-direction: left;
          gap: 190px;
          pointer-events: auto;
        }

        .filter-option {
          display: flex;
          align-items: center; 
          gap: 10px; 
          text-align: left;
          color: #333;
          font-size: 16px;
        }

        .filter-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
        }

        .icon-img {
          width: 100%;
          height: auto;
        }

        .filter-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start; 
        }

        .filter-label {
          font-weight: bold;
          font-size: 18px;
          color: #333;
          font-family: Montserrat,sans-serif;
        }

        .filter-desc {
          font-size: 12px;
          font-weight: 500;
          color: #555;
          font-family: Montserrat,sans-serif;
        }

        .explore-button {
          margin-top: 2px;
          margin-left: 90px;
          padding: 10px 20px;
          background-color: #0F67B1;
          border: none;
          border-radius: 10px;
          color: white;
          width: 200px;
          height: 47px;
          font-size: 20px;
          cursor: pointer;
          font-family: Montserrat,sans-serif;
        }

        .explore-button:hover {
          background-color: #0056b3;
        }
        
        .arrow-button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Slideshow;
