import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importation de useNavigate pour la redirection
import Cookies from "js-cookie"; // Importation de js-cookie pour gérer les cookies

const CheckAuth = ({ setIsLoading, isLoading }) => {
  const navigate = useNavigate(); // Initialise la fonction de navigation

  useEffect(() => {
    const token = Cookies.get("token"); // Récupère le token du cookie
    console.log(typeof token);

    if (!token) {
      // Si le token n'est pas présent, redirige l'utilisateur vers la page de connexion
      navigate("/");
    } else {
      setIsLoading(!isLoading);
    }
  }, [navigate]);

  return null; // Ce composant ne rend rien, il sert uniquement à vérifier et rediriger
};

export default CheckAuth;
