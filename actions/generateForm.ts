"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";

import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Gemini
import { revalidatePath } from "next/cache";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Specify the right model

export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User not found" };
    }

    

    

    
    

    

    

    

    
  } catch (error) {
    
  }
};
