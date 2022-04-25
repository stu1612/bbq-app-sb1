// npm
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// files
import { AppContext } from "../context/AppContext";
// components
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import AdminItems from "../components/AdminItems";

export default function Admin() {
  const { categories, status } = useContext(AppContext);

  // components
  const Categories =
    categories &&
    categories.map((item) => <AdminItems key={item.id} item={item} />);

  const Products = "hello";

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  if (categories === undefined) return <ErrorMessage />;

  return (
    <div>
      <nav>
        <Link to="/admin">Admin console</Link>
        <Link to="categoryForm">Add Category </Link>
        <Link to="productForm">Add Product</Link>
      </nav>
      <Outlet />
      <div>
        <h3>Categories</h3>
        {Categories}
      </div>
      <div>
        <h3>Products</h3>
        {Products}
      </div>
    </div>
  );
}
