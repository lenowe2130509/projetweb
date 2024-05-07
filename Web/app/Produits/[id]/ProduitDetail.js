"use client";
import React, { useState, useEffect } from 'react';
import UserContext from "./UserContext";
export default function ProduitDetail() {
  const id = React.useContext(UserContext);
  const [produitDetails, setProduitDetails] = React.useState([]);
  const [quantity, setQuantity] = useState(1);
 
  React.useEffect(() => {
    fetch(`http://localhost:3000/Publication/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => setProduitDetails(data))
      .catch(error => console.error(error));
  }, [id]);
 
  const addQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, produitDetails.nbInventaire));
  };
 
  const subtractQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
 
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(Math.min(Math.max(1, value), produitDetails.nbInventaire));
  };
 
  let totalPrice = (produitDetails.prix * quantity).toFixed(2);
 
 
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card m-2 custom-card">
            <div className="d-flex align-items-center">
              <img
                src={`../${produitDetails.image}`}
                alt="Product"
                className="img-fluid order-first"
                style={{ maxWidth: "50%", width: "50%" }}
              />
              <div style={{ marginLeft: "10px" }}>
                <h1 className="fw-bold">{produitDetails.titre}</h1>
                <p>Inventaire: {produitDetails.nbInventaire}</p>
                <h4>Prix total: {totalPrice} $</h4>
                <p>Quantité: {quantity}</p>
                <div className="d-flex">
                  <button onClick={subtractQuantity} disabled={quantity === 1}>
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    style={{ width: "50px", margin: "0 10px" }}
                    max={produitDetails.nbInventaire}
                    min={1}
                  />
                  <button onClick={addQuantity}>+</button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column p-3">
              <p>Description du produit: {produitDetails.Contenu}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}