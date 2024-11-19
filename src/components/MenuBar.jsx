import axios from "axios";
import Cookies from "js-cookie";

import defaultAvatar from "../assets/avatar.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
function MenuBar({ userData }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const res = await axios.get("http://localhost/backend/deconnexion", {
          headers: {
            Authorization: token, // Ajouter le token JWT à l'en-tête Authorization
          },
        });
        console.log(res);

        if (res.statusText == "OK") {
          Cookies.remove("token");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Utilisateur non authentifié");
    }
  };

  return (
    <div>
      <div className="px-[1.5em]">
        <h1 className="font-bold text-xl mt-4 ">Menu</h1>
        <div className="flex items-center gap-x-4 bg-grey-bg-secondary p-4 my-4 rounded-[5em] ">
          <div>
            <img
              src={defaultAvatar}
              alt="avatar ou photo de profil"
              width={50}
              height={50}
            />
          </div>
          <div className="text-[20px]">
            {userData.nom} {userData.prenom}
          </div>
        </div>
        <Button
          onClick={() => handleLogout()}
          type="button"
          contenu="Déconnexion"
        />
      </div>
    </div>
  );
}
export default MenuBar;
