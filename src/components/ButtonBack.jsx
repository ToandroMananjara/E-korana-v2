import ArrowPointingLeft from "../assets/ArrowPointingLeft.svg";
import { Link } from "react-router-dom";

function ButtonBack({ link }) {
  return (
    <Link to={link}>
      <div>
        <img src={ArrowPointingLeft} alt="" />
      </div>
    </Link>
  );
}
export default ButtonBack;
