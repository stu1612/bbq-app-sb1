import { useState } from "react";
import { readCollection } from "../firebase/firestore";

export default function AdminCategoryItem({ item }) {
  const { title, id } = item;
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // method
  async function loadData(path) {
    const itemsData = await readCollection(path);
    setProducts(itemsData);
    setIsOpen(!isOpen);
  }

  const Products = isOpen
    ? products.map((item) => (
        <div key={item.id}>
          {item.name} <button>Delete</button>
        </div>
      ))
    : null;

  return (
    <div>
      <h3>{title}</h3>
      <p>{id}</p>
      <button>Delete</button>
      <button onClick={() => loadData(`Menu/Dishes/content/${id}/content/`)}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {Products}
    </div>
  );
}
