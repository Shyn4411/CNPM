import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import { menuProducts } from "../../../utils/menuProducts";

export default async function ProductPage({ params }: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = menuProducts.find((item) => item.id === id);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
