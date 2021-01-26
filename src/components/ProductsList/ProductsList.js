import "./ProductsList.css";
import products from "assets/products.json";
import { ProductCard } from "components";

const ProductsList = () => (
  <div className="products-list">
    <h1>Groceries</h1>
    <div className="products-list__items">
      {products.map((product, key) => (
        <ProductCard
          key={key}
          className="products-list__item"
          product={product}
        />
      ))}
    </div>
  </div>
);

export default ProductsList;
