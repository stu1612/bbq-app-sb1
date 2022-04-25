// npm
import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
// components
import CategoryItem from "../components/CategoryItem";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

export default function Menu() {
  const { status, categories, loadData } = useContext(AppContext);

  // properties
  const path = "Menu/Dishes/content";

  useEffect(() => {
    loadData(path);
  }, [loadData]);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  if (categories === undefined) return <ErrorMessage />;

  // components
  const Categories =
    categories &&
    categories.map((item) => <CategoryItem key={item.id} item={item} />);

  return (
    <section className="menu" id="menu">
      <h2>Menu</h2>
      <div>{Categories}</div>
    </section>
  );
}
