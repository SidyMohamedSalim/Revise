import GenerateAiQuestion from "@/components/GenerateAiQuestion";
import CenterLayout from "@/components/layout/CenterLayout";
import { getAuthSession } from "@/lib/authConfig";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getAuthSession();
  if (!session?.user.id) {
    redirect("/");
  }
  return (
    <div>
      <CenterLayout>
        <GenerateAiQuestion />
      </CenterLayout>
    </div>
  );
};

export default page;
