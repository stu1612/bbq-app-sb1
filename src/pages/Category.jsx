// npm
import { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";
import { AppContext } from "../context/AppContext";
// components
import ProductItem from "../components/ProductItem";
import Loader from "../components/Loader";

export default function Category() {
  const { products, loadProducts } = useContext(AppContext);
  // const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);

  // Properties - id target values
  const { title } = useParams();
  const location = useLocation();
  const routeId = location.state.data.id;

  const path = `Menu/Dishes/content/${routeId}/content`;

  // method
  // useEffect(() => {
  //   async function loadData() {
  //     const itemsData = await readCollection(
  //       `Menu/Dishes/content/${routeId}/content`
  //     );
  //     setProducts(itemsData);
  //     setStatus(1);
  //   }
  //   loadData();
  // }, [routeId]);

  useEffect(() => {
    loadProducts(path);
    setStatus(1);
  }, [loadProducts, path]);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;

  const Products =
    products &&
    products.map((item) => <ProductItem key={item.id} item={item} />);

  return (
    <div>
      <h2>Category - {title}</h2>
      {Products}
    </div>
  );
}
