import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerContactos } from "../Services/fetch.js";
import { useEffect } from "react";


function Contactos() {
  const { store, dispatch } = useGlobalReducer();
  const { slug } = useParams();
  const { contacts } = store;
  console.log(slug);
  console.log(contacts);

  useEffect(() => {
    obtenerContactos(dispatch, slug);
  }, [dispatch, slug]);
  return (<div>
    <h1 className="text-center mt-5">Contactos de {slug}</h1>
    <ul>
      {
        contacts.map((contacto) => {
          return (
            <li key={contacto.id}>
              
               <div> {contacto.name}</div>
               <div>{contacto.email}</div>
               <div>{contacto.phone}</div>
               <div>{contacto.address}</div>
                
              <div>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </div>
               
             
            </li>
          );
        })
      }
    </ul>
    
    
    
    </div>);
}

export default Contactos;
