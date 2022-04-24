// npm
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";

export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);

  // method
  useEffect(() => {
    async function loadData() {
      const itemsData = await readCollection("Menu/Dishes/content");
      console.log(itemsData);
      setDishes(itemsData);
      setStatus(1);
    }
    loadData();
  }, []);

  // safeguard
  if (status === 0) return <p>Loading ..</p>;
  if (status === 2) return <p>Error ..</p>;

  const Categories = dishes.map((item) => (
    <div key={item.id}>
      <p>{item.title}</p>
      <Link to={`/menu/${item.id}`}>See more</Link>
    </div>
  ));

  return (
    <section className="menu" id="menu">
      <h2>Menu</h2>
      <div>{Categories}</div>
    </section>
  );
}
