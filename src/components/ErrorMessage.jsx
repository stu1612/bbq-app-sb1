// npm
import { Link } from "react-router-dom";

export default function ErrorMessage() {
  return (
    <div>
      <h2>Woops..Something has gone wrong</h2>
      <Link to="/">Take me home</Link>
    </div>
  );
}
