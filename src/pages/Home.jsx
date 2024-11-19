import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import MenuBar from "../components/MenuBar";
import CheckAuth from "../components/CheckAuth";
import Loading from "../components/Loading";
import LoadingConnected from "../components/LoadingConnected";

function Home(params) {
  // recuperer tous les données de l'utilisateur
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Récupérer le JWT stocké

    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const res = await axios.get("http://localhost/backend/home", {
            headers: {
              Authorization: token, // Ajouter le token JWT à l'en-tête Authorization
            },
          });

          setUserData(res.data.data);
          setLoading(false);

          console.log("res", userData.posts);
        } catch (error) {
          setError("Erreur de récupération des données");
          setLoading(false);
        }
      } else {
        setError("Utilisateur non authentifié");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Si l'on est en train de charger
  if (loading) {
    return (
      <div>
        <LoadingConnected />
      </div>
    );
  }
  return (
    <div className="relative  mb-[90px]">
      <CheckAuth setIsLoading={setIsLoading} isLoading={isLoading} />
      {!isLoading && <LoadingConnected />}
      {isLoading && (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}
export default Home;
