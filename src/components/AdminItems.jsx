// npm
import { useState, useContext, useEffect } from "react";
// firebase
import { readCollection, deleteDocument } from "../firebase/firestore";
// files
import { AppContext } from "../context/AppContext";
import AdminProductItem from "./AdminProductItem";

export default function AdminCategoryItem({ item }) {
  const { title, id } = item;
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // method
  // async function loadData(path) {
  //   const itemsData = await readCollection(path);
  //   setProducts(itemsData);
  //   setIsOpen(!isOpen);
  // }

  const Products = isOpen
    ? products.map((item) => (
        <div key={item.id}>
          {item.name}
          <button>Delete</button>
        </div>
      ))
    : null;

  return (
    <div>
      <h3>{title}</h3>
      <p>{id}</p>
      <button>Delete</button>

      {Products}
    </div>
  );
}
