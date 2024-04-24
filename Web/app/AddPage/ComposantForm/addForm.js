import "bootstrap/dist/css/bootstrap.css";
import FormStyle from './Form.css';
export default function AddForm(){
    async function confirmerPublication(formData) {
        "use server";
        let titre = formData.get("titre");
        let auteur = formData.get("auteur");
        let contenu = formData.get("contenu");

        var nouvellePublication = {
            "titre": titre,
            "auteur": auteur,
            "date de publication": new Date(),
            "Contenu": contenu
            };     
        const reponse = await fetch("http://localhost:3001/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nouvellePublication),
            })             
    }
return(
    <>
    <div class="d-flex flex-column justify-content-center align-items-center">
    <form id="AddPublication" action={confirmerPublication}>
        <label for="titre">Titre:</label>
        <input type="text" id="titre" name="titre" required></input>
        <label for="auteur"> Auteur:</label>
        <input type="text" id="auteur" name="auteur" required></input>
        <label for="contenu">Contenu:</label>
        <textarea id="contenu" name="contenu" rows="4" cols="50" required></textarea>
        <input type="hidden" id="id" name="id" value="1" required></input>
        <button type="submit" id="send" value="Envoyer">Envoyer</button>
     </form>
     </div>
     </>
)

}