import { memo, useEffect, useState } from "react";
import "./Recommendations.css";
import ProductCard from "components/ProductCard/ProductCard";
import products from "assets/products.json";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const API_URL = process.env.REACT_APP_API_URL;
const PROJECT_NAME = process.env.REACT_APP_PROJECT_NAME;
const DEPLOYMENT_NAME = process.env.REACT_APP_DEPLOYMENT_NAME;
const VERSION_NAME = process.env.REACT_APP_VERSION_NAME;

async function postRequest(url = "", data = {}) {
  const response = await fetch(API_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const Recommendations = ({ product }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    postRequest(
      `/projects/${PROJECT_NAME}/deployments/${DEPLOYMENT_NAME}/versions/${VERSION_NAME}/request?timeout=3600`,
      { clicked_product: product }
    ).then((response) => setRecommendations(response.result.recommendation));

    return () => {
      setRecommendations([]);
    };
  }, [product]);

  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Products related to this item</h3>
      <div className="recommendations__list">
        {recommendations.map((recommendation, key) => (
          <ProductCard
            product={recommendation}
            id={products.findIndex((product) => product === recommendation)}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Recommendations);
