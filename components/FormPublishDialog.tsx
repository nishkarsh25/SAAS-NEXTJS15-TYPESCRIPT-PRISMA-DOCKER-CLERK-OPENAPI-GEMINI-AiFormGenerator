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

  const copyClipboard = () => {
    const link = `${BASE_URL}/forms/${formId}`;
    navigator.clipboard.writeText(link);
    toast.success("Copied to clipboard");
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your form has been successfully published!</DialogTitle>
          <DialogDescription>
            You can now share your form with the world and start collection
            response.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Your form is now live and can be accessed at the following url</p>
          <br />
          <div className="flex items-center justify-between mt-4 gap-2">
            <LinkIcon />
            <Input
              placeholder="link"
              className="w-full outline-none bg-gray-100 dark:bg-gray-800"
              disabled
              value={`${BASE_URL}/forms/${formId}`}
            />
            <Button onClick={copyClipboard}>Copy</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};


