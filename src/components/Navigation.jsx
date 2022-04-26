// npm
import { Link } from "react-router-dom";
import { GiAnimalSkull } from "react-icons/gi";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav className="nav">
        <div className="logo">
          <GiAnimalSkull size={48} />
        </div>
        <ul className="links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </div>
  );
}
