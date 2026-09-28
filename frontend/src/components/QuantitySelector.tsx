type QuantitySelectorProps = {
  value: number;
  onChange: (quantity: number) => void;
};

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div className="quantity-selector" aria-label="Số lượng từ 1 đến 20">
      <button type="button" aria-label="Giảm số lượng" disabled={value <= 1} onClick={() => onChange(Math.max(1, value - 1))}>−</button>
      <input
        aria-label="Số lượng"
        type="number"
        min={1}
        max={20}
        value={value}
        onChange={(event) => {
          const nextValue = Number(event.currentTarget.value);
          if (Number.isFinite(nextValue)) onChange(Math.max(1, Math.min(20, Math.floor(nextValue))));
        }}
      />
      <button type="button" aria-label="Tăng số lượng" disabled={value >= 20} onClick={() => onChange(Math.min(20, value + 1))}>+</button>
    </div>
  );
}