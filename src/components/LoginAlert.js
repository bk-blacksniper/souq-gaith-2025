import React, { useState } from "react";
import "../styles/LoginAlert.css";

const LoginAlert = ({ toggleAlert, switchToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="alert-overlay" onClick={toggleAlert}>
      <div className="alert-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="alert-title">تسجيل الدخول</h2>
        <p className="alert-description">
          لتجربة كاملة والاستفادة من جميع خدماتنا، يرجى تسجيل الدخول
        </p>
        <form>
          <div className="form-group">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="form-control"
            />
          </div>
          <div className="form-group password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              className="form-control"
            />
            <i
              className={`password-icon bi ${
                showPassword ? "bi-eye" : "bi-eye-slash"
              }`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <div className="form-group remember-me">
            <label>
              <input type="checkbox" /> تذكرني
            </label>
            <a href="/" className="forgot-password">
              نسيت كلمة المرور؟
            </a>
          </div>
          <button type="submit" className="btn btn-success">
            تسجيل الدخول
          </button>
        </form>
        <p className="create-account">
          ليس لديك حساب؟ <span onClick={switchToSignUp}>إنشاء حساب جديد</span>
        </p>
        <button className="btn-close" onClick={toggleAlert}></button>
      </div>
    </div>
  );
};

export default LoginAlert;
