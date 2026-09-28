import type { DrinkTopping } from "../utils/menuProducts";

type ToppingSelectorProps = {
  toppings: readonly DrinkTopping[];
  selectedIds: readonly string[];
  onToggle: (toppingId: string) => void;
};

const formatPrice = (price: number) => `${price.toLocaleString("vi-VN")}đ`;

export default function ToppingSelector({ toppings, selectedIds, onToggle }: ToppingSelectorProps) {
  return (
    <div className="option-section topping-section">
      <div className="section-heading">
        <div><h2>Topping</h2><p>Thêm một chút vui cho ly đồ uống</p></div>
        <span className="optional-label">TÙY CHỌN</span>
      </div>
      <div className="topping-options">
        {toppings.map((topping) => {
          const checked = selectedIds.includes(topping.id);

          return (
            <label className={`topping-option${checked ? " checked" : ""}`} key={topping.id}>
              <input type="checkbox" checked={checked} onChange={() => onToggle(topping.id)} />
              <span className="custom-check" aria-hidden="true">{checked ? "✓" : ""}</span>
              <span className="topping-copy">
                <span className="topping-name">{topping.name}</span>
                <span className="topping-description">{topping.description}</span>
              </span>
              <span className="topping-price">+{formatPrice(topping.price)}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}