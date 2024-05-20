"use client"
import React, { useEffect, useState } from 'react';
export default function AddForm(props) {
    async function confirmerSuppression() { 
        await fetch(`http://localhost:3000/Publication/${props.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
              },
              duplex: "half",
              body: JSON.stringify(props.params.id),
            })
            window.location.href = "../Boutique";
    }
    return( 
        <>
            <form className = "d-flex flex-column justify-content-center align-items-center" action={confirmerSuppression}>
                    <div>
                        <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger me-2">Confirmer</button>
                            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = "../Boutique"}>Annuler</button>
                        </div>
                    </div>
            </form>
        </>
    )

}