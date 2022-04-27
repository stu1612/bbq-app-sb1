// npm
import { Link, useNavigate } from "react-router-dom";
import { GiAnimalSkull } from "react-icons/gi";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <GiAnimalSkull size={48} />
          </Link>
        </div>
        <ul className="links">
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </div>
  );
}
