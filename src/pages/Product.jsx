// npm
import { useLocation, Link } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const { name, imgURL, description, recipe, price } = location.state.data;

  // components
  const RecipeList = recipe.map((items, index) => <li key={index}>{items}</li>);

  return (
    <div>
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <ul>{RecipeList}</ul>
      <Link to={-1}>Go back</Link>;
    </div>
  );
}
