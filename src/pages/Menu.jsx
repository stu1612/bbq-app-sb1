// npm
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
// components
import CategoryItem from "../components/CategoryItem";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
// images
import hero from "../assets/images/hero_2.jpg";

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
      <section className="hero">
        <img src={hero} alt="ribs cooking on bbq" className="hero-image" />
        <h1 className="title">menu</h1>
      </section>
      <section>
        <div>{Categories}</div>
      </section>
    </section>
  );
}
