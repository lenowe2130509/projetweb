"use client"
import { FaTrash, FaEdit } from 'react-icons/fa'; 
import Connexion from './Connexion';
import React, { useState } from 'react';

export default function Acceuil(props){
    const [isConnected, setIsConnected] = useState(false);

    const handleRedirect = () => {
        if (isConnected) {
            window.location.href = "./Produits/[id]/Blogards";
        } else {
            setIsConnected(true);
        }
    };

    const handleInscriptionClick = () => {
        setShowInscription(true); // Afficher la page Inscription lors du clic sur le bouton "S'inscrire"
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {isConnected ? (
                <Connexion />
            ) : (
                <div className="card m-2">
                    <img 
                        src="images/.png" 
                        className="card-img-top img-fluid" 
                        alt="Image 1"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Obtenez votre Cosplay pour une allure Excepionnelle !</h5>
                        <div className="text-center">
                            <a className="btn text-white" onClick={handleRedirect}>
                                <img src="/image/LAW-removebg-preview.png" alt="Bootstrap" width="50%" height="50%"/>
                            </a>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}
