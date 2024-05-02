"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Inscription from '../Page/Inscription';
import BootStrap from '@/public/CSS/Bootstrap.css';
async function confirmerPublication(formData) {
    const https = require('https');
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    let user = formData.get("username");
    let password = formData.get("password");
    var nouvelleConnexion = {
        "username": user,
        "password": password,
        };     
    const reponse = await fetch("https://localhost:7194/api/Authentification/login", {
        method: 'POST',
        agent,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nouvelleConnexion),
        }).then(console.log("Connexion reussielllllllllllllllllll !"));   
}
 
export default function Home() {
    return (
        <>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex justify-content-center'>
                <img src="../../image/AllMight.png" className="AllMight img-fluid " alt="Image 1"/>
                <img src="../../image/Main_AllMight.png" className="Hand img-fluid "alt="Image 2"/>
            </div>        
            <div className="card w-50">
                <h1 className="text-center mb-4">Connexion</h1>
                <form className='d-flex flex-column justify-content-center align-items-center' id="AddLogin" action={confirmerPublication}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                        <input type="text" id="username" className="form-label" name="username" required></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input type="text" id="password" className="form-label" name="password" required></input>
                    </div>
                    <button type="submit" className="d-flex justify-content-center">
                        <img src="/image/connexion.png" type="submit" className='img-fluid' alt="Connexion"/>
                    </button>    
                </form>
                <div className="mt-5 text-center">
                    <p>Vous n'avez pas de compte ?  <Link href="./Inscription">
                    <button className="btn btn-primary">S'inscrire</button>
                </Link> </p>
                </div>
            </div>
        </div>
        </>
    );
}