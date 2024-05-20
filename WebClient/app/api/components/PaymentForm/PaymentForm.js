"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");
 
    // à tester si fonctionnel affichage de amout : 890
    try {
      if (!stripe || !cardElement) return null;
      fetch ("../../create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 890 }),
        
      }).then((res) => console.log(res));
      /*const { data } = await axios.post("../../create-payment-intent", {
        data: { amount: 1000 },
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });*/
      const clientSecret = data;

     /* await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });*/
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <form onSubmit={onSubmit}>
      <CardElement />
      <button type="submit">boiatbol</button>
    </form>
    //bouton change ?
  );
}