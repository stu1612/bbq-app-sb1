// npm
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";

export default function Category() {
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);
  const { title } = useParams();

  // method
  useEffect(() => {
    async function loadData() {
      const itemsData = await readCollection(
        `Menu/Dishes/content/${title}/content`
      );
      setDishes(itemsData);
      setStatus(1);
    }
    loadData();
  }, [title]);

  // safeguard
  if (status === 0) return <p>Loading ..</p>;
  if (status === 2) return <p>Error ..</p>;

  const Products = "hi";

  return (
    <div>
      Category
      <h2>{title}</h2>
    </div>
  );
}
