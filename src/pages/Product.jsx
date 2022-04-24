// npm
import { useLocation, Link } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const { name } = location.state.data;
  return (
    <div>
      Product - {name}
      <Link to={-1}>Go back</Link>;
    </div>
  );
}
