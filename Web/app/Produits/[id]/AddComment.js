"use client";
import Comment from './Comment';
import React from "react";
import UserContext from './UserContext';
export default function AddComment() {
    const id  = React.useContext(UserContext);
    async function envoieCommentaire(id) {
        let contenu = document.getElementById("userComment").value;
        var nouveauCommentaire = {
            "publicationLier": id,
            "date": new Date(),
            "Contenu": contenu
        };   
        fetch("http://localhost:3000/Commentaire", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nouveauCommentaire),
        });
    }

    return (
        <div className="container">
            <h5 className="d-flex justify-content-start m-3">Commentaires</h5>
            <div className="mb-3">
                <textarea className="form-control" id="userComment" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-dark border border-1 border-white float-end btn-lg" onClick={() => envoieCommentaire(id)}>Envoyer</button>
        </div>
    );
}