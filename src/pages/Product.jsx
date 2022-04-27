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
      <section className="content-item">
        <p>{description}</p>
        <p>{price} sek</p>
        <div>{recipes}</div>
        <Link to={-1} className="btn btn-primary">
          Go back
        </Link>
      </section>
    </section>
  );
}
