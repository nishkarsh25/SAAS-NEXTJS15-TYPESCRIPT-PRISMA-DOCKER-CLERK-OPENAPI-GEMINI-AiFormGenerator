import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { LinkIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

type Props = {
  formId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
const FormPublishDialog: React.FC<Props> = ({ formId, open, onOpenChange }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  
  
};


