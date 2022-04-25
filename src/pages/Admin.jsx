// npm
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";
// components
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import AdminItems from "../components/AdminItems";

export default function Admin() {
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);

  // properties
  const categoryPath = "Menu/Dishes/content";

  // method
  useEffect(() => {
    async function loadData(path) {
      const itemsData = await readCollection(path);
      setDishes(itemsData);
      setStatus(1);
    }
    loadData(categoryPath);
  }, []);

  // components
  const Categories =
    dishes && dishes.map((item) => <AdminItems key={item.id} item={item} />);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  if (dishes === undefined) return <ErrorMessage />;

  return (
    <div>
      <nav>
        <Link to="/admin">Admin console</Link>
        <Link to="categoryForm">Add Category </Link>
        <Link to="productForm">Add Product</Link>
      </nav>
      <Outlet />
      <h3>Categories</h3>
      {Categories}
    </div>
  );
}
