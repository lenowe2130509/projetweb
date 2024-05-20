import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_51PDRfCCmcbawN1NBhd1M06Wvv7u1LNqdoeoyiUw2W5Hhemmo7TXeynzSf4OrMQAhnkj9q5fju50cBnm1RWZgSkfM00SuJzWXZu", {
  typescript: true,
  apiVersion: "2024-04-10",
});

export async function POST(req) {
  const data  = await req.json();
  console.log(data);
  const { amount } = data;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "CAD",
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}