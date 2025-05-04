import SubmissionsDetails from "@/components/SubmissionDetails";
import prisma from "@/lib/prisma";
import React from "react";

const Submissions = async ({
  params,
}: {
  params: Promise<{ formId: string }>;
}) => {
  const formId = (await params).formId;

  const submissions = await prisma.submissions.findMany({
    where: {
      formId: Number(formId),
    },
    include: {
      form: true,
    },
  });

  

  
};


