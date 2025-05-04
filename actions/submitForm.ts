"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const submitForm = async (formId: number, formData: any) => {
  try {
    const user = await currentUser();

    if (!user) {
      return { success: false, message: "User not found" };
    }

    if (!formId) {
      return { success: false, message: "Form id not found" };
    }

    

    

    

    

    
  } catch (error) {
    
  }
};
