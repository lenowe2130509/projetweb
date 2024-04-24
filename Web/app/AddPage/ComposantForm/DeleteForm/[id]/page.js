"use client"
import UserContext from "@/app/Forum/[id]/composantsForum/UserContext.js";
import React, { useEffect, useState } from 'react';
export default function AddForm(props) {
    console.log(props.params.id);
    async function confirmerSuppression() { 
        await fetch(`http://localhost:3001/api`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
              },
              duplex: "half",
              body: JSON.stringify(props.params.id),
            }).then(console.log("envoyer a supprimer"))
    }
    return( 
        <>
            <form className = "d-flex flex-column justify-content-center align-items-center" action={confirmerSuppression}>
                    <div>
                        <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger me-2">Confirmer</button>
                            <button type="button" className="btn btn-secondary">Annuler</button>
                        </div>
                    </div>
            </form>
        </>
    )

}