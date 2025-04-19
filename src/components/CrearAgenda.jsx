import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearAgenda } from "../Services/fetch";
import { useNavigate } from "react-router-dom";

function CrearAgenda() {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [slug, setSlug] = useState("");
  const handleCreateAgenda = () => {
    crearAgenda(slug, dispatch)
      .then((data) => {
        console.log("Agenda creada:", data);
        // Aquí puedes manejar la respuesta después de crear la agenda
      })
      .catch((error) => {
        console.error("Error al crear la agenda:", error);
        // Aquí puedes manejar el error
      });
    navigate(`/contactos/${slug}`);
  };
  console.log(store);
  return (
    <div className="text-center mt-5">
      <div className="row d-flex flex-column gap-1 ">
        <div>
          <input
            type="text"
            placeholder="Nombre de la agenda"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => handleCreateAgenda()}
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrearAgenda;
