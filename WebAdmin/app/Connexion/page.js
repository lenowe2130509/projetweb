"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import BootStrap from '../../public/CSS/Bootstrap.css';
import { NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER } from 'next/dist/lib/constants';
async function confirmerConnexion(formData) {
    let user = formData.get("username");
    let password = formData.get("password");   
    const reponse = await fetch("http://localhost:3000/User?username=" + user + "&password=" + password + "", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },      
        })
        console.log(reponse.status);
        if(reponse.status === 200 || reponse.status === 201) 
        {
            let data = await reponse.json();
            localStorage.setItem("username", user);
            window.location.href = "../Boutique";
        }
}
 
export default function Home() {
    return (
        <>
        <div className='d-flex justify-content-center align-items-center p-5'>       
            <div className="card w-50">
                <h1 className="text-center mb-4">Connexion</h1>
                <form className='d-flex flex-column justify-content-center align-items-center' id="AddLogin" action={confirmerConnexion}>
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
                    <p>Vous n'avez pas de compte ?  
                        <Link href="../Inscription">
                            <button className="btn btn-primary">S'inscrire</button>
                        </Link> 
                    </p>
                </div>
                
            </div>
        </div>
        <a href="https://www.youtube.com/watch?v=J0S6tc6dIK8&t=5s" target="_blank" rel="noopener noreferrer">
        <img src="../../image/TITAN_login.png" className="img-fluid w-25" alt="Image 1"/>
        </a>
        </>
    );
}