"use client";
import "bootstrap/dist/css/bootstrap.css";
import FormStyle from '../../public/CSS/Bootstrap.css';
import { FaTrash} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import PanierCSS from "./Panier.css";

export default function Home() {
  const [data, setData] = useState([]);
  const clientName = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:3000/CommandeCosplay?ClientID=${clientName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de la récupération des commandes:', error));
  }, [clientName]);

  return (
    <>
      <div className="card d-flex flex-column justify-content-center align-items-center m-5">
        <h1>Votre Panier</h1>
        {data.map((item, index) => (
            <div className="card-panier d-flex flex-Column justify-content-between align-items-center m-3">
                <div className="d-flex flex-column justify-content-between align-items-center">
                    <div className="image-container m-2">
                        <img src={item.Image} className="card-img-top mb-2 " alt="Image 1" />
                    </div>
                    <h5 className="">Titre : {item.Titre}</h5>
                    <p className=""> Prix : {item.Prix} | Quantite : x{item.Quantite}</p>
                    <button className="btn btn-danger text-decoration-none mb-2">
                        <a className='text-decoration-none text-white' href={`#`}>
                            <FaTrash /> Retirer
                        </a>
                    </button>
                </div>
            </div>
        ))}
      </div>
    </>
  );
}