"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingPlan, pricingPlan } from "@/lib/pricingplan";
import { Badge } from "./ui/badge";
import { CheckCircle } from "lucide-react";

import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  userId: string | undefined;
};

const PricingPage: React.FC<Props> = ({ userId }) => {
  const router = useRouter();

  const checkoutHandler = async (price: number, plan: string) => {
    if (!userId) {
      router.push("/sign-in");
    }
    if (price === 0) {
      return;
    }

    try {
      const response = await axios.post("/api/stripe/checkout-session", {
        price,
        userId,
        plan,
      });

      const { url } = response.data; // Destructuring session URL from backend response

      if (url) {
        router.push(url); // Redirect to the Stripe-hosted checkout page using the URL
      } else {
        console.error("Checkout URL not found");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
    }
  };

  return (
    <div>
      
    </div>
  );
};


