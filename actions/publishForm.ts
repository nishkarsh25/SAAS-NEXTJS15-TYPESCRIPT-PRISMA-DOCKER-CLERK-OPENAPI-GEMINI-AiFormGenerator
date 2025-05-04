"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const publishForm = async (formId: number) => {
  try {
    const user = await currentUser();
    

    if (!user) {
      return { success: false, message: "User not found" };
    }

    

    

    


    
  } catch (error) {
    
  }
};
