// npm
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader-container">
      <RotatingLines width="150" visible={true} strokeColor="#FF5733" />
    </div>
  );
}
