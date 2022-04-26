// npm
import { Link } from "react-router-dom";

export default function PillsContainer({ categories }) {
  const Pills = categories.map((item) => (
    <Link
      to={`/menu/${item.title}`}
      state={{ data: item }}
      key={item.id}
      className="pill"
      style={{ padding: "10px" }}
    >
      {item.title}
    </Link>
  ));
  return <div className="pills-container">{Pills}</div>;
}
