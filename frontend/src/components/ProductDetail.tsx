"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";
import ToppingSelector from "./ToppingSelector";
import { menuToppings, type DrinkProduct } from "../utils/menuProducts";
import { calculateTotalPrice, formatPrice } from "../utils/priceCalculator";

const sizeDetails = [
  { id: "S", label: "Nhỏ", volume: "250 ml" },
  { id: "M", label: "Vừa", volume: "350 ml" },
  { id: "L", label: "Lớn", volume: "450 ml" },
] as const;

type SizeId = (typeof sizeDetails)[number]["id"];

export default function ProductDetail({ product }: { product: DrinkProduct }) {
  const sizes = sizeDetails.map((size, index) => ({ ...size, price: product.prices[index] }));
  const [selectedSize, setSelectedSize] = useState<SizeId>("M");
  const [selectedToppingIds, setSelectedToppingIds] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [cartMessage, setCartMessage] = useState("");
  const basePrice = sizes.find((size) => size.id === selectedSize)?.price ?? 0;
  const selectedToppings = menuToppings.filter((topping) => selectedToppingIds.includes(topping.id));
  const totalPrice = calculateTotalPrice(basePrice, selectedToppings, quantity);

  function toggleTopping(toppingId: string) {
    setCartMessage("");
    setSelectedToppingIds((current) =>
      current.includes(toppingId)
        ? current.filter((id) => id !== toppingId)
        : [...current, toppingId],
    );
  }

  function addToCart() {
    setCartCount((current) => current + quantity);
    setCartMessage(`Đã thêm ${quantity} ${product.name} vào giỏ.`);
  }

  return (
    <main className="storefront">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="BrewLite trang chủ">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">Brew<span>Lite</span></span>
        </Link>
        <nav className="main-nav" aria-label="Điều hướng chính">
          <Link className="nav-current" href="/">Thực đơn</Link>
          <a href="#cau-chuyen">Câu chuyện</a>
        </nav>
        <div className="header-actions">
          <span className="header-location"><span className="location-dot" /> TP. Hồ Chí Minh <span aria-hidden="true">⌄</span></span>
          <button className="cart-button" type="button" aria-label={`Giỏ hàng, ${cartCount} sản phẩm`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6"/><circle cx="10" cy="19" r="1"/><circle cx="18" cy="19" r="1"/></svg>
            <span>Giỏ hàng</span>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </header>

      <div className="page-content" id="top">
        <nav className="breadcrumbs" aria-label="Đường dẫn">
          <Link className="back-to-menu" href="/">← Thực đơn</Link>
          <span aria-hidden="true">/</span>
          <span>{product.category}</span><span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <section className="product-layout" aria-labelledby="product-name">
          <div className="product-art" aria-label={`Hình minh họa ${product.name}`}>
            <div className="art-note"><span>01</span> PHA CHẬM, UỐNG ÊM</div>
            <Image src={product.image} alt={product.name} width={620} height={640} priority />
            <div className="art-caption"><span className="caption-rule" /> ESPRESSO · SỮA TƯƠI · BỌT MỊN</div>
            <span className="art-stamp" aria-hidden="true">BL<small>EST. 2024</small></span>
          </div>

          <div className="product-info">
            <p className="eyebrow"><span className="eyebrow-line" /> {product.category.toLocaleUpperCase("vi-VN")}</p>
            <h1 id="product-name">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <div className="base-price-row"><span>Giá từ</span><strong>{formatPrice(sizes[0].price)}</strong><span className="price-dot" /><span>Thức uống BrewLite</span></div>

            <SizeSelector
              sizes={sizes}
              selectedSize={selectedSize}
              onChange={(size) => { setSelectedSize(size); setCartMessage(""); }}
            />
            <ToppingSelector toppings={menuToppings} selectedIds={selectedToppingIds} onToggle={toggleTopping} />

            <div className="quantity-row">
              <div className="quantity-copy"><h2>Số lượng</h2><p>Từ 1 đến 20 ly</p></div>
              <QuantitySelector value={quantity} onChange={(nextQuantity) => { setQuantity(nextQuantity); setCartMessage(""); }} />
            </div>

            <div className="price-summary" aria-live="polite">
              <div className="summary-copy"><span className="summary-label">TỔNG GIÁ</span><span className="summary-note">{quantity} ly · đã gồm các tùy chọn</span></div>
              <strong className="summary-price">{formatPrice(totalPrice)}</strong>
            </div>
            <button className="confirm-button add-cart-button" type="button" onClick={addToCart}>
              Thêm vào giỏ<span aria-hidden="true">↗</span>
            </button>
            <p className="confirmation-note" aria-live="polite">{cartMessage || "Giá sẽ thay đổi theo kích cỡ, topping và số lượng."}</p>
          </div>
        </section>

        <footer className="page-footer"><span>BREWLITE COFFEE · CHẬM MỘT NHỊP, NGON TRỌN VỊ</span><span>01 / 05</span></footer>
      </div>
    </main>
  );
}