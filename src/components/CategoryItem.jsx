// npm
import { useState } from "react";
import { Link } from "react-router-dom";
// scripts
import slugify from "../scripts/slugify";

export default function CategoryItem({ item }) {
  const { title } = item;
  const [categoryItem] = useState(item);

  // methods
  const slugTitle = slugify(title);
  return (
    <div>
      <p>{title}</p>
      <Link to={`/menu/${slugTitle}`} state={{ data: categoryItem }}>
        See more
      </Link>
    </div>
  );
}
