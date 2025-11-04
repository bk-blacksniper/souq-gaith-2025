import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import LoginAlert from "./LoginAlert";
import SignUp from "./SignUp";

const Navbar = () => {
  const location = useLocation();

  const [showAlert, setShowAlert] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignUp = () => setIsSignUp(true);
  const switchToLogin = () => setIsSignUp(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  
  // Function to check active link
  const isActive = (path) =>
    location.pathname === path ? "text-dark fw-bold" : "text-white";

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold text-success" to="/">
            سوق الغيث
          </Link>

          {/* Toggler for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/")}`} to="/">
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/services")}`}
                  to="/services"
                >
                  خدماتنا
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/products")}`}
                  to="/products"
                >
                  منتجاتنا
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/about")}`} to="/about">
                  من نحن
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/faq")}`} to="/faq">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/contact")}`}
                  to="/contact"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>

            {/* Buttons */}
            <div className="d-flex">
              <button className="btn btn-success" onClick={toggleAlert}>
                تسجيل الدخول
              </button>
              <button className="create-account btn">إنشاء حساب</button>
            </div>
          </div>
        </div>
      </nav>
      {/* عرض تنبيه تسجيل الدخول */}
      {showAlert &&
        (isSignUp ? (
          <SignUp toggleAlert={toggleAlert} switchToLogin={switchToLogin} />
        ) : (
          <LoginAlert
            toggleAlert={toggleAlert}
            switchToSignUp={switchToSignUp}
          />
        ))}
    </div>
  );
};

export default Navbar;
