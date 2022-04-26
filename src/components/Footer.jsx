//npm
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="social-footer">
        <div className="icons">
          <BsFacebook size={28} className="social-icon" />
          <BsTwitter size={28} className="social-icon" />
          <BsInstagram size={28} className="social-icon" />
        </div>
        <div>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
      <div className="copyright"></div>
    </footer>
  );
}
