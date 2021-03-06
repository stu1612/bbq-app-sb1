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
    <div className="card-item">
      <div className="card-image">
        <img src={imgURL} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{shortDescription}...</p>
        <Link
          to={`/menu/${slugTitle}`}
          state={{ data: categoryItem }}
          className="btn btn-primary"
        >
          See more
        </Link>
      </div>
    </div>
  );
}
