import React, { useState } from "react";
import "../styles/LoginAlert.css";

const SignUp = ({ toggleAlert, switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="alert-overlay" onClick={toggleAlert}>
      <div className="alert-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="alert-title">إنشاء حساب جديد</h2>
        <p className="alert-description">
          مرحباً بك! انضم إلينا الآن واستمتع بجميع خدماتنا المميزة عبر التسجيل
        </p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="الاسم" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="رقم الجوال *"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <select className="form-control">
              <option>مكان الإقامة (المحافظة)*</option>
              <option value="1">رفح</option>
              <option value="2">خانيونس</option>
              <option value="3">غزة</option>
              <option value="4">الوسطى</option>
              <option value="5">الشمال</option>
            </select>
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
          <div className="form-group">
            <label>
              <input type="checkbox" /> الموافقة على الشروط والأحكام
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            إنشاء الحساب
          </button>
        </form>
        <p className="create-account">
          لديك حساب؟ <span onClick={switchToLogin}>تسجيل الدخول</span>
        </p>
        <button className="btn-close" onClick={toggleAlert}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default SignUp;
