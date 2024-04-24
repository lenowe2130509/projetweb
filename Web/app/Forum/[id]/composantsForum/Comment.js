"use client";
import React from "react";
export default  function Comment(props) {
    return (
        <>
        <div className="d-flex align-items-start justify-content-start m-4 border border-dark">
            <img src="../images/Connexion.png" alt="User Avatar" className="avatar" style={{ width: "50px", height: "50px" }} />
            <div className="comment-details ms-3 p-3">
                <p className="comment-message">{props.Contenu}</p>
            </div>
        </div>
        </>
    );
}
