export const dynamic = "force-dynamic";
import React from "react";
export async function POST(request) {
    const response = await fetch("http://localhost:3000/Publication",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(await request.json()),
    });
    let blog = await response.json();
    return new Response(JSON.stringify(blog), {
        status: 200
    });
}

export async function DELETE(request) {
    let data =  await request.json();
    const response = await fetch(`http://localhost:3000/Publication/${data}`);
    const publication = await response.json();

    if (publication) {
        const deleteResponse = await fetch(`http://localhost:3000/Publication/${data}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (deleteResponse.status === 200) {
            return new Response({
                status: 200,
                body: 'Suppression réussie'
            });
        } else {
            return new Response({
                status: deleteResponse.status,
                body: 'Échec de la suppression'
            });
        }
    } else {
        return new Response({
            status: 404,
            body: 'Publication non trouvée'
        });
    }
}

export async function PUT(request) {
    let blog = await request.json();
    const id  = blog.id;

    let data = JSON.stringify({
        "id": blog.id,
        "titre": blog.titre,
        "auteur": blog.auteur,
        "date de publication": new Date(),
        "Contenu": blog.Contenu
    })
    console.log(data);
    const response = await fetch(`http://localhost:3000/Publication/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    });
    if (response.ok) {
        const updatedData = await response.json(); // Obtenez la réponse de l'API
        console.log('Mise à jour réussie:', updatedData);
    } else {
        console.error('Erreur lors de la mise à jour:', response.statusText);
    }
    return new Response(JSON.stringify(data), {
        status: 200
    });
}