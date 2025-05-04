import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { price, userId, plan } = await req.json();

  if (!userId) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      {
        status: 400,
      }
    );
  }

  const successUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/success`
    : null;

  const cancelUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? `${process.env.NEXT_PUBLIC_BASE_URL}`
    : null;

  

  
}
