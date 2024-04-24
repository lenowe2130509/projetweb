"use client";
import React from "react";
import Comment from './Comment';
import UserContext from "./UserContext";

export default  function CommentList(){
    const id  = React.useContext(UserContext);
    let [commentaires, setCommentaire] = React.useState([]);
    React.useState(() => {
        async function CreationCommentaire(){
            fetch(`http://localhost:3000/Commentaire?publicationLier=${id}`)
            .then(response => response.json())
            .then(json => setCommentaire(json));
        }
        CreationCommentaire();
    });

    return (
        <div className="row" id="Commentaire">
        {commentaires.map(commentaire =>
              <Comment key= {commentaire.id} {...commentaire} />
          )}
        </div>
    )
}
