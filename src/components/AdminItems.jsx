// npm
import { useState, useContext } from "react";
// firebase
import { readCollection } from "../firebase/firestore";
// files
import { AppContext } from "../context/AppContext";

export default function AdminCategoryItem({ item }) {
  const { title, id } = item;
  const { deleteCategoryItem, deleteProductItem, products, setProducts } =
    useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  async function loadData(path) {
    const itemsData = await readCollection(path);
    setProducts(itemsData);
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{id}</p>
      <button onClick={() => deleteCategoryItem(item.id)}>Delete</button>
      <button onClick={() => loadData(`Menu/Dishes/content/${id}/content/`)}>
        show
      </button>
      {isOpen
        ? products.map((item) => (
            <div key={item.id}>
              {item.name}
              <button
                onClick={() =>
                  deleteProductItem(
                    `Menu/Dishes/content/${id}/content/`,
                    item.id
                  )
                }
              >
                Delete
              </button>
            </div>
          ))
        : null}
    </div>
  );
}
