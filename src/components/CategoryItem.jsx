// npm
import { useState } from "react";
import { Link } from "react-router-dom";
// scripts
import slugify from "../scripts/slugify";
import trimmedString from "../scripts/trimmedString";

export default function CategoryItem({ item }) {
  const { title, description, imgURL } = item;
  const [categoryItem] = useState(item);

  // properties
  const slugTitle = slugify(title);
  const shortDescription = trimmedString(description);

  return (
    <div>
      <div>
        <img src={imgURL} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{shortDescription}...</p>
      <Link to={`/menu/${slugTitle}`} state={{ data: categoryItem }}>
        See more
      </Link>
    </div>
  );
}
