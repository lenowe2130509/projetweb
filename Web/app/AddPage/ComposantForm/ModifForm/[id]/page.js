"use client";
import React, { useEffect, useState } from 'react';
import StyleForm from '../../../../AddPage/Form.css';

export default function ModifyForm(props) {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/Publication/${props.params.id}`);
            const data = await response.json();
            setBlog(data);
        }

        fetchData();
    }, [props.params.id]);

    if (!blog) {
        return <div>Chargement...</div>; 
    }
    async function confirmerModif(formData) {
        let titre = formData.get("titre");
        let auteur = formData.get("auteur");
        let contenue = formData.get("contenu");

        var nouvellePublication = {
            "titre": titre,
            "auteur": auteur,
            "date de publication": new Date(),
            "Contenu": contenue,
            "id": props.params.id
            };    
        await fetch("http://localhost:3001/api", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(nouvellePublication),
            }).then(console.log("envoyer a modifier"))
    }
    return( 
        <>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <form id="ModifyForm" action={confirmerModif}>
            <label htmlFor="titre">Titre:</label>
            <input type="text" id="titre" name="titre" value={blog.titre} onChange={(e) => setBlog({ ...blog, titre: e.target.value }) }required />
            <label htmlFor="auteur">Auteur:</label>
            <input type="text" id="auteur" name="auteur" value={blog.auteur} onChange={(e) => setBlog({ ...blog, auteur: e.target.value })}required />
            <label htmlFor="contenu">Contenu:</label>
            <textarea id="contenu" name="contenu" rows="4" cols="50" value={blog.Contenu}  onChange={(e) => setBlog({ ...blog, contenue: e.target.value })}required />
            <input type="hidden" id="id" name="id" value="1" required />
            <button type="submit" id="send">Modifier</button>
        </form>
        </div>
        </>
    );
}














