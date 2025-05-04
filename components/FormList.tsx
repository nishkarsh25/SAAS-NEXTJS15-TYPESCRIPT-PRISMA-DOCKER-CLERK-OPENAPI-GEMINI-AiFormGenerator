"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Edit2 } from "lucide-react";
import Link from "next/link";
import { Form } from "@/types/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteForm } from "@/actions/deleteForm";

type Props = {
  form: Form;
};

const FormList: React.FC<Props> = ({ form }) => {
  const router = useRouter();

  const delelteFormHandler = async (formId: number) => {
    const data = await deleteForm(formId);
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div>
      
    </div>
  );
};


