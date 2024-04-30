"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Inscription from './Inscription';
import BootStrap from '@/public/CSS/Bootstrap.css';

export default function Connexion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nom d\'utilisateur:', username);
        console.log('Mot de passe:', password);
    };

    return (
        <>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex justify-content-center'>
                <img src="../../image/AllMight.png" className="AllMight img-fluid position-absolute" alt="Image 1" style={{ zIndex: "1", width: "40vw", top: "40vh" }}/>
                <img src="../../image/Main_AllMight.png" className="Hand img-fluid position-absolute" alt="Image 2" style={{ zIndex: "3", width: "10vw", top: "52vh", right: "0vw" }}/>
            </div>        
            <div className="card w-50 position-absolute" style={{ zIndex: "2"}}>
                <h1 className="text-center mb-4">Connexion</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit}>
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
                    <div className='mb-3'>
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
                    <div className="d-flex justify-content-center position-absolute" style={{ bottom: "10%", width: "100%", left: "50%", transform: "translateX(-50%)" }}>
                        <img src="/image/connexion.png" className='img-fluid' alt="Connexion"/>
                    </div>     
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
