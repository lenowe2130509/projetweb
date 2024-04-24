export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
    let blog = null;
    const response = await fetch(`http://localhost:3000/Publication/${params.id}`);
    blog = await response.json();
    return new Response(JSON.stringify(blog), {
            status: 200
    });
}

export async function DELETE(request, { params }) {
    const response = await fetch(`http://localhost:3000/Publication/${params.id}`);
    const publication = await response.json();

    if (publication) {
        const deleteResponse = await fetch(`http://localhost:3000/Publication/${params.id}`, {
            method: 'DELETE'
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