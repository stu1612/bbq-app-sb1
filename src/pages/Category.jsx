// npm
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";
// components
import ProductItem from "../components/ProductItem";

export default function Category() {
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);
  // id target values
  const { title } = useParams();
  const location = useLocation();
  const routeId = location.state.data.id;

  // method
  useEffect(() => {
    async function loadData() {
      const itemsData = await readCollection(
        `Menu/Dishes/content/${routeId}/content`
      );
      setDishes(itemsData);
      setStatus(1);
    }
    loadData();
  }, [routeId]);

  // safeguard
  if (status === 0) return <p>Loading ..</p>;
  if (status === 2) return <p>Error ..</p>;

  const Products =
    dishes && dishes.map((item) => <ProductItem key={item.id} item={item} />);

  return (
    <div>
      <h2>Category - {title}</h2>
      {Products}
    </div>
  );
}
