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

  

  

  

 

  

  
}

 