export type DrinkProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  prices: readonly [number, number, number];
};

export type DrinkTopping = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const menuProducts: DrinkProduct[] = [
  { id: "cappuccino", name: "Cappuccino", category: "Cà phê", description: "Espresso đậm vừa, sữa tươi nóng và lớp bọt mịn cân bằng trong từng ngụm.", image: "/cappuccino.svg", prices: [45000, 51000, 57000] },
  { id: "coffee-milk", name: "Cà phê sữa đá", category: "Cà phê", description: "Cà phê rang xay đậm vị, hòa cùng sữa đặc và đá mát lạnh.", image: "/iced-coffee.svg", prices: [35000, 40000, 45000] },
  { id: "americano", name: "Americano", category: "Cà phê", description: "Espresso nguyên chất pha cùng nước, hậu vị thanh và gọn.", image: "/iced-coffee.svg", prices: [40000, 45000, 50000] },
  { id: "peach-tea", name: "Trà đào cam sả", category: "Trà", description: "Trà thanh mát cùng đào chín, cam tươi và chút hương sả.", image: "/peach-tea.svg", prices: [39000, 45000, 51000] },
  { id: "lotus-tea", name: "Trà sen vàng", category: "Trà", description: "Trà sen dịu nhẹ, vị ngọt vừa và hương thơm thanh tao.", image: "/peach-tea.svg", prices: [42000, 48000, 54000] },
  { id: "matcha-freeze", name: "Freeze matcha", category: "Đá xay", description: "Matcha xay mịn cùng sữa tươi, mát lạnh và thơm dịu.", image: "/matcha.svg", prices: [49000, 55000, 61000] },
];

export const menuToppings: DrinkTopping[] = [
  { id: "pearls", name: "Trân châu trắng", description: "Dẻo thơm, vui miệng", price: 7000 },
  { id: "cream", name: "Kem sữa tươi", description: "Béo nhẹ, phủ mịn", price: 8000 },
];