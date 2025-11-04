import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Products.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const products = [
  {
    id: 1,
    image: "🍅",
    title: "كيلو طماطم",
    owner: "محمد إبراهيم",
    region: "خانيونس",
    action: "بدل الآن",
  },
  {
    id: 2,
    image: "🌶️",
    title: "10 حباب فلفل",
    owner: "محمد إبراهيم",
    region: "خانيونس",
    action: "تبرع الآن",
  },
  {
    id: 3,
    image: "🍅",
    title: "كيلو طماطم",
    owner: "محمد إبراهيم",
    region: "خانيونس",
    action: "بدل الآن",
  },
  {
    id: 4,
    image: "🌶️",
    title: "10 حباب فلفل",
    owner: "محمد إبراهيم",
    region: "خانيونس",
    action: "تبرع الآن",
  },
  {
    id: 5,
    image: "🍅",
    title: "كيلو طماطم",
    owner: "محمد إبراهيم",
    region: "خانيونس",
    action: "بدل الآن",
  },
];

const ProductSlider = () => {
  return (
    <div className="section-product">
      <div className="container py-5" style={{ position: "relative" }}>
        {/* العنوان والوصف */}
        <h2 className="fw-bold text-center mb-3">منتجاتنا</h2>
        <p className="text-muted text-center mb-4">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيباهي
        </p>

        {/* شريط البحث */}
        <div className="search-bar mb-4 d-flex justify-content-center align-items-center gap-3">
          <div className="position-relative">
            <select
              dir="rtl"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>التصنيفات</option>
              <option value="1">طعام</option>
              <option value="2">ملابس</option>
              <option value="3">إلكترونيات</option>
            </select>
          </div>

          <div className="position-relative">
            <input
              type="text"
              className="form-control search-input"
              placeholder="البحث باسم منتج"
            />
            <i className="bi bi-search search-icon"></i>
          </div>
          <div className="position-relative">
            <select class="form-select" aria-label="Default select example">
              <option selected>كل المحافظات</option>
              <option value="1">رفح</option>
              <option value="2">خانيونس</option>
              <option value="3">دير البلح</option>
            </select>
          </div>
          <button className="btn-search btn btn-success px-4">ابحث</button>
        </div>

        <div className="all-cards">
          {products.map((product) => (
            <div className="product-card">
              <div className="card-top text-center">
                <div className="product-icon">{product.image}</div>
              </div>
              <div className="card-bottom">
                <h5 className="fw-bold">{product.title}</h5>

                <div className="text-muted">
                  <p>{product.owner}</p>
                  <p>منطقة: {product.region}</p>
                </div>
                <button className="btn btn-success">{product.action}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
