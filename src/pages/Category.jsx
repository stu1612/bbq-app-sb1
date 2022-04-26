// npm
import { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
// files
import { AppContext } from "../context/AppContext";
// components
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";

export default function Category() {
  const { products, loadProducts } = useContext(AppContext);
  const [status, setStatus] = useState(0);

  // properties
  const { title } = useParams();
  const location = useLocation();
  const routeId = location.state.data.id;

  const path = `Menu/Dishes/content/${routeId}/content`;

  useEffect(() => {
    loadProducts(path);
    setStatus(1);
  }, [loadProducts, path]);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;

  const mappedProducts = products.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  const Products = products && mappedProducts;

  const noProducts = products.length === 0 && (
    <p>There are no products at this time</p>
  );

  return (
    <div>
      <h2>Category - {title}</h2>
      {Products}
      {noProducts}
    </div>
  );
}
