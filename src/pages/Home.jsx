import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

import { obtenerAgendas } from "../Services/fetch.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const { agendas } = store;
  const navigate = useNavigate();

  useEffect(() => {
    obtenerAgendas(dispatch);
  }, [dispatch]);
  console.log(agendas);

  const handleCrearAgenda = () => {
    navigate("/crear-agenda");
  };
  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <button className="btn btn-primary" onClick={handleCrearAgenda}>
        Crear agenda
      </button>
			
    </div>
  );
};
