// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// scripts
import slugify from "../scripts/slugify";

export default function ProductItem({ item }) {
  const { name, description, imgURL, price } = item;
  const [productItem] = useState(item);

  // Properties
  const { title } = useParams();
  const slugTitle = slugify(title);
  const slugName = slugify(name);

  return (
    <div className="card-item">
      <div className="card-image">
        <img
          src={imgURL}
          alt={name}
          style={{ height: "200px", width: "200px", objectFit: "cover" }}
        />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <p>{price} sek</p>
        <p>{description}</p>
        <Link
          to={`/menu/${slugTitle}/${slugName}`}
          state={{ data: productItem }}
          className="btn btn-primary"
        >
          see details
        </Link>
      </div>
    </div>
  );
}
