"use server";
export default async function confirmerPublication(formData) {
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