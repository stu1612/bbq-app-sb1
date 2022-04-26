// npm
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
// components
import CategoryItem from "../components/CategoryItem";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

export default function Menu() {
  const { status, categories } = useContext(AppContext);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  if (categories === undefined) return <ErrorMessage />;

  // components
  const mappedCategories = categories.map((item) => (
    <CategoryItem key={item.id} item={item} />
  ));
  const Categories = categories && mappedCategories;

  return (
    <section className="menu" id="menu">
      <h2>Menu</h2>
      <div>{Categories}</div>
    </section>
  );
}
