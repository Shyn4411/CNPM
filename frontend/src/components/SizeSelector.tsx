type Size = {
  id: "S" | "M" | "L";
  label: string;
  volume: string;
  price: number;
};

type SizeSelectorProps = {
  sizes: readonly Size[];
  selectedSize: Size["id"];
  onChange: (size: Size["id"]) => void;
};

const formatPrice = (price: number) => `${price.toLocaleString("vi-VN")}đ`;

export default function SizeSelector({ sizes, selectedSize, onChange }: SizeSelectorProps) {
  return (
    <div className="option-section size-section">
      <div className="section-heading">
        <div><h2>Kích cỡ</h2><p>Chọn dung tích phù hợp</p></div>
        <span className="required-label">BẮT BUỘC</span>
      </div>
      <div className="size-options" role="group" aria-label="Chọn kích cỡ">
        {sizes.map((size) => (
          <button
            className={`size-option${selectedSize === size.id ? " selected" : ""}`}
            type="button"
            key={size.id}
            aria-pressed={selectedSize === size.id}
            onClick={() => onChange(size.id)}
          >
            <span className="size-label">{size.id}</span>
            <span className="size-volume">{size.volume}</span>
            <span className="size-price">{formatPrice(size.price)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}