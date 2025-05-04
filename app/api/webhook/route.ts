import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createSubscription } from "@/actions/userSubscription";
import { NextResponse } from 'next/server';
 
const relevantEvents = new Set([
  "checkout.session.completed",
]);

export async function POST(req: Request) {

  if (!process.env.WEBHOOK_ENDPOINT_SECRET) {
    throw new Error("WEBHOOK_ENDPOINT_SECRET is not set");
  }

  const secret = process.env.WEBHOOK_ENDPOINT_SECRET!;
  const payload = await req.text(); // Read the raw body as text
  const sig = req.headers.get("stripe-signature") as string; // Retrieve the signature from headers

  

  

 

  

  
}

 