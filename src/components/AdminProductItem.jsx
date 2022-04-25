// npm
import { useContext } from "react";
// files
import { AppContext } from "../context/AppContext";

export default function AdminProductItem({ item }) {
  const { id, name } = item;
  const { deleteProductItem } = useContext(AppContext);
  const path = `Menu/Dishes/content/${id}/content/`;

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => deleteProductItem(path, id)}>Delete</button>
    </div>
  );
}
