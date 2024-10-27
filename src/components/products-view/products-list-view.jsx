import ProductCard9 from "components/product-cards/product-card-9"; 
// CUSTOM DATA MODEL


// ==========================================================
export default function ProductsListView({
  products
}) {
  return products.map(item => <ProductCard9 id={item.id} key={item.id} slug={item.slug} title={item.title} price={item.price} off={item.discount} rating={item.rating} imgUrl={item.thumbnail} />);
}