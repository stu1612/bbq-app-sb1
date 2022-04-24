// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// scripts
import slugify from "../scripts/slugify";

export default function ProductItem({ item }) {
  const { name, description } = item;
  const { title } = useParams();
  const [productItem] = useState(item);

  // methods
  const slugTitle = slugify(title);
  const slugName = slugify(name);

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`/menu/${slugTitle}/${slugName}`} state={{ data: productItem }}>
        see details
      </Link>
    </div>
  );
}
