"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { menuProducts } from "../utils/menuProducts";

const categories = ["Tất cả", "Cà phê", "Trà", "Đá xay"];
const formatPrice = (price: number) => `${price.toLocaleString("vi-VN")}đ`;

export default function MenuScreen() {
  const [activeCategory, setActiveCategory] = useState("Cà phê");
  const filteredProducts = menuProducts.filter(
    (product) => activeCategory === "Tất cả" || product.category === activeCategory,
  );

  return (
    <main className="storefront">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BrewLite trang chủ">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">Brew<span>Lite</span></span>
        </a>
        <nav className="main-nav" aria-label="Điều hướng chính">
          <a className="nav-current" href="#menu">Thực đơn</a>
          <a href="#cau-chuyen">Câu chuyện</a>
        </nav>
        <span className="header-location"><span className="location-dot" /> TP. Hồ Chí Minh <span aria-hidden="true">⌄</span></span>
      </header>

      <div className="menu-page-content" id="top">
        <section className="menu-intro" aria-labelledby="menu-title">
          <div className="menu-intro-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> PHA TƯƠI MỖI NGÀY</p>
            <h1 id="menu-title">Thực đơn BrewLite</h1>
            <p className="menu-intro-description">Một chút tỉnh táo, một chút dịu dàng. Chọn món hợp với nhịp hôm nay.</p>
          </div>
          <div className="menu-open-note">
            <span className="open-indicator" />
            <span><strong>Đang mở cửa</strong><small>07:00 — 22:00 · Pha mới tại quầy</small></span>
          </div>
        </section>

        <div className="menu-controls">
          <div className="category-tabs" role="tablist" aria-label="Danh mục đồ uống">
            {categories.map((category) => (
              <button
                className={`category-tab${activeCategory === category ? " active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="menu-item-count">{String(filteredProducts.length).padStart(2, "0")} MÓN</span>
        </div>

        <section className="menu-grid" aria-label={`${activeCategory} trong thực đơn`}>
          {filteredProducts.map((product, index) => (
            <Link className="menu-product-card" href={`/product/${product.id}`} key={product.id}>
              <span className={`menu-product-image menu-art-${product.id}`}>
                <Image src={product.image} alt="" width={420} height={300} priority={index < 3} />
                {index === 0 && activeCategory === "Cà phê" && <span className="product-badge">ĐƯỢC YÊU THÍCH</span>}
                <span className="product-open" aria-hidden="true">↗</span>
              </span>
              <span className="menu-product-copy">
                <span className="menu-product-category">{product.category.toLocaleUpperCase("vi-VN")}</span>
                <span className="menu-product-name">{product.name}</span>
                <span className="menu-product-description">{product.description}</span>
                <span className="menu-product-bottom">
                  <span className="menu-product-price">Từ {formatPrice(product.prices[0])}</span>
                  <span className="menu-select-label">CHỌN MÓN <span aria-hidden="true">+</span></span>
                </span>
              </span>
            </Link>
          ))}
        </section>

        <footer className="page-footer"><span>BREWLITE COFFEE · CHẬM MỘT NHỊP, NGON TRỌN VỊ</span><span>01 / 05</span></footer>
      </div>
    </main>
  );
}
