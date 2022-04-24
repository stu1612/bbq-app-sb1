// npm
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  const { title, id } = item;
  const [menuItem] = useState(item);
  return (
    <div>
      <p>{title}</p>
      <Link to={`/menu/${title}`} state={{ data: menuItem }}>
        See more
      </Link>
    </div>
  );
}
