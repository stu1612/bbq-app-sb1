// npm
import { useLocation, Link } from "react-router-dom";

export default function Product() {
  // properties
  const location = useLocation();
  const { name, imgURL, description, price } = location.state.data;
  const { recipe_1, recipe_2, recipe_3, recipe_4, recipe_5 } =
    location.state.data;

  return (
    <div>
      <img
        src={imgURL}
        alt={name}
        style={{ height: "200px", width: "200px", objectFit: "cover" }}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <ul>
        <li>{recipe_1}</li>
        <li>{recipe_2}</li>
        <li>{recipe_3}</li>
        <li>{recipe_4}</li>
        <li>{recipe_5}</li>
      </ul>
      <Link to={-1}>Go back</Link>;
    </div>
  );
}
