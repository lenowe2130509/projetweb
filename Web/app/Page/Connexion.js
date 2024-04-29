"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Importer Link depuis Next.js
import Inscription from './Inscription';

export default function Connexion() {
    // Définir des états pour le nom d'utilisateur et le mot de passe
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour la soumission du formulaire (par exemple, connexion à l'API, validation des informations, etc.)
        console.log('Nom d\'utilisateur:', username);
        console.log('Mot de passe:', password);
    };

    return (
        <div className="card w-50 mx-auto">
            <h1 className="text-center mb-4">Connexion</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
            </form>
            <div className="mt-3 text-center">
                <p>Vous n'avez pas de compte ?  <Link href="./Inscription">
                <button className="btn btn-primary">S'inscrire</button>
            </Link> </p>
            </div>
        </div>
    );
}
