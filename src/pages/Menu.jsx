// npm
import { useState, useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
// files
import { readCollection } from "../firebase/firestore";

export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);

  // method
  useEffect(() => {
    async function loadData() {
      const itemsData = await readCollection("Menu/Dishes/content");
      setDishes(itemsData);
      setStatus(1);
    }
    loadData();
  }, []);

  // safeguard
  if (status === 0) return <p>Loading ..</p>;
  if (status === 2) return <p>Error ..</p>;

  // components
  const Categories = dishes.map((item) => (
    <CategoryItem key={item.id} item={item} />
  ));

  return (
    <section className="menu" id="menu">
      <h2>Menu</h2>
      <div>{Categories}</div>
    </section>
  );
}
