// npm
import { useLocation, Link } from "react-router-dom";

export default function Product() {
  // properties
  const location = useLocation();
  const { name, imgURL, description, price, recipes } = location.state.data;

  return (
    <section>
      <section className="hero">
        <img src={imgURL} alt={name} />
        <h1>{name}</h1>
      </section>
      <section className="content-contact container-920">
        <h3>{price} sek</h3>
        <p>{description}</p>
        <p>Ingredients: {recipes}</p>
        <Link to={-1} className="btn btn-primary">
          Go back
        </Link>
      </section>
    </section>
  );
}
