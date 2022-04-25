// npm
import { useState, useContext } from "react";
// firebase
import { readCollection } from "../firebase/firestore";
// files
import { AppContext } from "../context/AppContext";

export default function AdminCategoryItem({ item }) {
  const { title, id } = item;
  const { deleteCategoryItem } = useContext(AppContext);
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
      <button onClick={() => deleteCategoryItem(id)}>Delete</button>
      <button onClick={() => loadData(`Menu/Dishes/content/${id}/content/`)}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {Products}
    </div>
  );
}
