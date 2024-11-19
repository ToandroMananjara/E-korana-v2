import { House } from "lucide-react";
import { TvMinimalPlay } from "lucide-react";
import { Bell } from "lucide-react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
const style = "w-[35px] h-[35px]";
const footers = [
  {
    id: 0,
    icon: <House className={style} />,
    link: "/home",
  },
  {
    id: 1,
    icon: <TvMinimalPlay className={style} />,
    link: "/video",
  },
  {
    id: 2,
    icon: <Bell className={style} />,
    link: "/notification",
  },
  {
    id: 3,
    icon: <Menu to="menu" className={style} />,
    link: "/menu",
  },
];
function Footer(params) {
  return (
    <footer className="w-screen fixed bottom-[-1px] bg-blue-primary py-5 shadow-md ">
      <div className="w-full flex justify-around items-center">
        {footers.map((footer) => (
          <div
            key={footer.id}
            className="flex items-center justify-center text-white cursor-pointer"
          >
            <Link to={footer.link}>{footer.icon}</Link>
          </div>
        ))}
      </div>
    </footer>
  );
}
export default Footer;
