"use client";
import "bootstrap/dist/css/bootstrap.css";
import FormStyle from '../../public/CSS/Bootstrap.css';
import { FaTrash, FaShoppingBag} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import PanierCSS from "./Panier.css";
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/CommandeCosplays?Status=panier`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de la récupération des commandes:', error));
  });

  async function ConfirmerCommande() {
  let PrixTotal = data.reduce((total, item) => total + item.Prix * item.Quantite, 0);
  if(PrixTotal === 0)
  {
    return alert("Votre panier est vide");
  }
  else
  {
    var Commande = {
      "PrixTotal": PrixTotal,
      "NomClient": "guest"
    };     
    const reponse = await fetch("http://localhost:3000/Commande", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Commande),
    }) 
    if (reponse.status === 200 || reponse.status === 201) 
    {
      try {
        await Promise.all(data.map(item => {
          item.Status = "Acheté";
          return fetch(`http://localhost:3000/CommandeCosplays/${item.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...item, Status: "Acheté" })
          }).then(response => {console.log(response.status);
          });
        })); 
      } 
      catch (error) {
        console.error("Failed to update items:", error);
        }
      }
    }
  }
  async function Supprimer(id)
  {
    const response = await fetch(`http://localhost:3000/CommandeCosplays/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return (
    <>
      <div className="card d-flex flex-column justify-content-center align-items-center m-5">
        <h1>Votre Panier</h1>
        {data.map((item, index) => (
            <div className="card-panier d-flex flex-Column align-items-center col-sm-10 col-md-10 col-lg-8 mb-2">
                    <div className="image-container col-sm-10 col-md-2 col-lg-2 m-2">
                        <img src={item.Image} className="card-img-top mb-2 img-fluid " alt="Image 1" />
                    </div>
                    <h5 className="m-3">Titre : {item.Titre}</h5>
                    <p className="m-3"> Prix : {item.Prix} | Quantite : x{item.Quantite}</p>
                    <button className="btn btn-danger text-decoration-none" onClick={() => Supprimer(item.id)}>
                        <a className='text-decoration-none text-white' href={`#`}>
                            <FaTrash /> Retirer
                        </a>
                    </button>
                </div>
        ))}
        <div className="d-flex justify-content-center align-items-center m-3">
        <h2 className="font-weight-bold m-3"> Prix Total : {data.reduce((total, item) => total + item.Prix * item.Quantite, 0)}$</h2>
        <button className="Achat btn btn-primary text-decoration-none m-3" onClick={ConfirmerCommande}>
          <Link className='text-decoration-none text-white' href={`../api`}>
            <FaShoppingBag /> Acheter
          </Link>
        </button>
        </div>
      </div>
    </>
  );
}
