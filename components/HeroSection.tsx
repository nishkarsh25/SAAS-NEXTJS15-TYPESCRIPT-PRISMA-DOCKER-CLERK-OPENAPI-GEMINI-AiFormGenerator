"use client"
import React, { useState } from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";

type SuggestionText = {
  label: string;
  text: string;
};

const suggestionBtnText: SuggestionText[] = [
  {
    label: "Job Application",
    text: "Develop a basic job application form that serves as a one-page solution form collecting essential information from applicants.",
  },
  {
    label: "Registration Form",
    text: "Create a course registration form suitable form any scheool or instituition.",
  },
  {
    label: "Feedback Form",
    text: "Create a client feedback form to gather valuable insights from any clients.",
  },
];

type Props = {
  totalForms:number;
  isSubscribed:boolean
}

const HeroSection :React.FC<Props> = ({totalForms, isSubscribed}) => {
  const [text, setText] = useState<string>("");

  return (
    <section>
      
    </section>
  );
};

