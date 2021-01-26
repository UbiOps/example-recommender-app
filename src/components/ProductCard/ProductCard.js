import "./ProductCard.css";
import productImage from "assets/images/product.png";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const generatePrice = () => {
  const rowPrice = Math.random() * 10 + 1;
  const roundedPrice = Math.round(rowPrice * 100) / 100;
  return roundedPrice.toFixed(2);
};

const ProductCard = ({ product, className, ...props }) => (
  <div
    className={["product-card", className].filter((x) => x).join(" ")}
    {...props}
  >
    <img
      src={productImage}
      alt={product}
      className="product-card__illustration"
    />
    <div className="product-card__details">
      <h4>{capitalizeFirstLetter(product)}</h4>
      <h3 className="product-card__price">€ {generatePrice().toString()}</h3>
    </div>
  </div>
);

export default ProductCard;
