// npm
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";
// components
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
// images
import hero from "../assets/images/hero_3.jpg";

export default function Category() {
  // const { products, loadProducts } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0);

  // properties
  const { title } = useParams();
  const location = useLocation();
  const routeId = location.state.data.id;

  // const path = `Menu/Dishes/content/${routeId}/content`;

  // useEffect(() => {
  //   loadProducts(path);
  //   setStatus(1);
  // }, [loadProducts, path]);

  useEffect(() => {
    async function loadProducts(path) {
      const itemsData = await readCollection(path);
      setProducts(itemsData);
      setStatus(1);
    }
    loadProducts(`Menu/Dishes/content/${routeId}/content`);
  }, [routeId]);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;

  const mappedProducts = products.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  const Products = products && mappedProducts;

  const noProducts = products.length === 0 && (
    <p>There are no products at this time</p>
  );

  return (
    <section>
      <section className="hero">
        <img src={hero} alt="ribs cooking on bbq" className="hero-image" />
        <h1 className="title">{title}</h1>
      </section>
      <section className="cards">
        {Products}
        {noProducts}
      </section>
    </section>
  );
}
