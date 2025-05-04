"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { publishForm } from "@/actions/publishForm";
import FormPublishDialog from "./FormPublishDialog";
import toast from "react-hot-toast";
import { submitForm } from "@/actions/submitForm";

type Props = { form: any; isEditMode: boolean };

const AiGeneratedForm: React.FC<Props> = ({ form, isEditMode }) => {
  const [successDialogOpen, setSuccessDialogOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});

  

  

  

  

  
};


