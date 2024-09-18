import React from 'react';
import { Link } from 'react-router-dom';

export default function TopbarContainer() {
  return (
    <div className="bg-dark">
      <div className="container-fluid d-flex justify-content-lg-start align-items-center py-2">
        <Link
          to="/"
          className="d-flex text-decoration-none text-white me-lg-auto"
        >
          <h2>React Online Shop</h2>
        </Link>
        <div className="d-flex align-items-center ms-4">
          <Link
            to="/favorites"
            className="text-decoration-none text-white d-flex align-items-center px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-heart-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
            <span>Favorites</span>
          </Link>
        </div>
        <div className="d-flex align-items-center ms-4">
          <Link
            to="/cart"
            className="text-decoration-none text-white d-flex align-items-center px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-cart-fill me-2"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
