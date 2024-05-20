"use client";
import "bootstrap/dist/css/bootstrap.css";
import FormStyle from './Form.css';
export default function AddForm(){
    async function confirmerPublication(formData) {
        let titre = formData.get("titre");
        let contenu = formData.get("contenu");
        let prix = formData.get("prix");
        let nbInventaire = formData.get("nbInventaire");
        let image = formData.get("image");

        var nouveauProduit = {
            "titre": titre,
            "Contenu": contenu,
            "prix": prix,
            "nbInventaire": nbInventaire,
            "image": image,
            "quantite": 1,  
            };   
            
        
        const reponse = await fetch("http://localhost:3000/Publication", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nouveauProduit),
            }) 
            
            if(reponse.status === 200 || reponse.status === 201)
            {
                window.location.href = "../Boutique";
            }
    }
return(
    <>
    <div className="d-flex flex-column justify-content-center align-items-center m-5">
        <form id="AddPublication" className="d-flex flex-column justify-content-center align-items-center" action={confirmerPublication}>
        <input type="hidden" id="token" name="token" value={localStorage.getItem('token')}/>
            <div className="mb-3 w-75">
                <label htmlFor="titre" className="form-label text-white">Titre:</label>
                <input type="text" id="titre" className="form-control" name="titre" required/>
            </div>
            <div className="mb-3 w-75">
                <label htmlFor="contenu" className="form-label text-white">Contenu:</label>
                <textarea className="form-control" id="contenu" name="contenu" rows="4" cols="50" required></textarea>
            </div>
            <div className="mb-3 w-75">
                <label htmlFor="prix" className="form-label text-white">Prix:</label>
                <input type="double" className="form-control" id="prix" name="prix" required/>
            </div>
            <div className="mb-3 w-75">
                <label htmlFor="nbInventaire" className="form-label text-white">Nombre en inventaire:</label>
                <input type="number" className="form-control" id="nbInventaire" name="nbInventaire" required/>
            </div>
            <div className="mb-3 w-75">
                <label htmlFor="image" className="form-label text-white">Image:</label>
                <input type="text" id="image" name="image" required/>
            </div>
            <div className="mb-3">
                <button type="submit" id="send" className="btn btn-primary">Envoyer</button>
            </div>
        </form>
    </div>
     </>
)
}