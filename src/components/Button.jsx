import { Link } from "react-router-dom";

function Button({ type, link, contenu, onClick }) {
  if (link) {
    return (
      <Link to={link} className="w-full">
        <button
          type={type}
          className="h-[50px] bg-blue-primary font-medium text-[22px] text-primary rounded-[15px] w-full"
        >
          {contenu}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className="h-[50px] bg-blue-primary text-[22px] font-medium text-primary rounded-[15px] w-full"
      onClick={onClick}
    >
      {contenu}
    </button>
  );
}
export default Button;
