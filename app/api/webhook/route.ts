import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createSubscription } from "@/actions/userSubscription";
import { NextResponse } from 'next/server';
 
const relevantEvents = new Set([
  "checkout.session.completed",
]);



 