import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cart = useSelector((store) => store.cart.items);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 position-fixed w-100" style={{ zIndex: 1000, top: 0 }}>
      <div className="logo d-flex align-items-center">
            <h2 className="text-white fw-bold" style={{
              background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: "24px"
            }}>
              P Fashion
            </h2>
          </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-white">
                Cart <span className="badge bg-danger ms-1">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Space below Navbar */}
      <div style={{ paddingTop: '58px' }}>
        {/* Your main content will go here */}
      </div>
    </>
  );
}

export default Navbar;
