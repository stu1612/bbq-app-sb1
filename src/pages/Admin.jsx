// npm
import { useState, useEffect } from "react";
// files
import { readCollection } from "../firebase/firestore";
// components
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import AdminCategoryItem from "../components/AdminCategoryItem";

export default function Admin() {
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);

  // properties
  const path = "Menu/Dishes/content";

  // method
  useEffect(() => {
    async function loadData(path) {
      const itemsData = await readCollection(path);
      setDishes(itemsData);
      setStatus(1);
    }
    loadData(path);
  }, []);

  // components
  const Categories =
    dishes &&
    dishes.map((item) => <AdminCategoryItem key={item.id} item={item} />);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  if (dishes === undefined) return <ErrorMessage />;

  return (
    <div>
      <h3>Categories</h3>
      {Categories}
    </div>
  );
}
