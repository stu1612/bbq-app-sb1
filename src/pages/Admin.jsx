// npm
import { useEffect, useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// files
import { AppContext } from "../context/AppContext";
import { readCollection } from "../firebase/firestore";
// components
import AdminItems from "../components/AdminItems";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

export default function Admin() {
  // const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);
  const { categories, setCategories } = useContext(AppContext);

  const CategoryPath = "Menu/Dishes/content/";

  useEffect(() => {
    async function loadCategories(path) {
      const itemsData = await readCollection(path);
      setCategories(itemsData);
      setStatus(1);
    }
    loadCategories(CategoryPath);
  }, [setCategories]);

  // components
  const Categories =
    categories &&
    categories.map((item) => <AdminItems key={item.id} item={item} />);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  if (categories === undefined) return <ErrorMessage />;

  return (
    <div>
      <nav>
        <Link to="/admin" className="btn btn-primary">
          Admin console
        </Link>
        <Link to="categoryForm" className="btn btn-primary">
          Add Category
        </Link>
        <Link to="productForm" className="btn btn-primary">
          Add Product
        </Link>
      </nav>
      <Outlet />
      <div>
        <h3>Categories</h3>
        {Categories}
      </div>
    </div>
  );
}
