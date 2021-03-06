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
    <div className="form-category-item">
      <h3>{title}</h3>
      <button
        onClick={() => deleteCategoryItem(item.id)}
        className="btn btn-primary"
      >
        Delete
      </button>
      <button
        onClick={() => loadData(`Menu/Dishes/content/${id}/content/`)}
        className="btn btn-secondary"
      >
        {!isOpen ? "show" : "hide"}
      </button>
      {isOpen
        ? products.map((item) => (
            <div key={item.id} className="form-product-item">
              {item.name}
              <button
                className="btn btn-primary"
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
