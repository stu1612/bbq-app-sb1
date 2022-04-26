// npm
import { useState, useContext, useEffect } from "react";
// firebase
import { readCollection, deleteDocument } from "../firebase/firestore";
// files
import { AppContext } from "../context/AppContext";
import AdminProductItem from "./AdminProductItem";
import deleteItem from "../scripts/deleteItem";

export default function AdminCategoryItem({ item }) {
  const { title, id } = item;
  const { deleteCategoryItem } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState([]);

  // method
  async function loadData(path) {
    const itemsData = await readCollection(path);
    setProducts(itemsData);
    setIsOpen(!isOpen);
  }

  // shows and delets admin product item
  // const Products = isOpen
  //   ? products.map((item) => (
  //       <div key={item.id}>
  //         {item.name}
  //         <button onClick={() => deleteItem()}>Delete</button>
  //       </div>
  //     ))
  //   : null;

  // shows and delete category item
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
                  deleteItem(
                    `Menu/Dishes/content/${id}/content/`,
                    item.id,
                    products,
                    setProducts
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
