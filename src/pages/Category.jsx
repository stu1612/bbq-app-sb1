// npm
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";

export default function Category() {
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);
  const data = useParams();
  console.log(data);

  const title = "hi";

  // method
  useEffect(() => {
    async function loadData() {
      const itemsData = await readCollection(
        `Menu/Dishes/content/${title}/content`
      );
      console.log(itemsData);
      setDishes(itemsData);
      setStatus(1);
    }
    loadData();
  }, [title]);

  // safeguard
  if (status === 0) return <p>Loading ..</p>;
  if (status === 2) return <p>Error ..</p>;

  const Products =
    dishes &&
    dishes.map((item) => (
      <div key={item.id}>
        <div>
          <img src="" alt="" />
        </div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ));

  return (
    <div>
      <h2>Category - {title}</h2>
      {Products}
    </div>
  );
}
