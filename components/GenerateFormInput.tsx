"use client";
import React, { ChangeEvent, useActionState, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Lock, Sparkles } from "lucide-react";
import { generateForm } from "@/actions/generateForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MAX_FREE_FORM } from "@/lib/utils";

type InitialState = {
  message: string;
  success: boolean;
  data?: any;
};

const initialState: InitialState = {
  message: "",
  success: false,
};
type Props = {
  text?:string;
  totalForms?:number;
  isSubscribed?:boolean;
}

const GenerateFormInput: React.FC<Props> = ({ text, totalForms, isSubscribed }) => {
  const [description, setDescription] = useState<string | undefined>("");
  const [state, formAction] = useActionState(generateForm, initialState);
  

  
  

 
 
 
};



