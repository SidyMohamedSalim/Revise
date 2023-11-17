import GenerateAiQuestion from "@/components/GenerateAiQuestion";
import StartQuizz from "@/components/StartQuizz";
import CenterLayout from "@/components/layout/CenterLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <CenterLayout>
        <GenerateAiQuestion />
      </CenterLayout>
    </div>
  );
};

export default page;
