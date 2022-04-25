// npm
import { useState, useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
// files
import { readCollection } from "../firebase/firestore";
// components
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

export default function Menu() {
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

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  if (dishes === undefined) return <ErrorMessage />;

  // components
  const Categories =
    dishes && dishes.map((item) => <CategoryItem key={item.id} item={item} />);

  return (
    <section className="menu" id="menu">
      <h2>Menu</h2>
      <div>{Categories}</div>
    </section>
  );
}
