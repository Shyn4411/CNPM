import type { DrinkTopping } from "./menuProducts";

export function calculateTotalPrice(
  basePrice: number,
  selectedToppings: readonly DrinkTopping[],
  quantity: number,
) {
  const toppingTotal = selectedToppings.reduce((total, topping) => total + topping.price, 0);
  const safeQuantity = Math.max(1, Math.min(20, Math.floor(quantity || 1)));

  return (basePrice + toppingTotal) * safeQuantity;
}

export function formatPrice(price: number) {
  return `${price.toLocaleString("vi-VN")}đ`;
}