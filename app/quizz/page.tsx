import StartQuizz from "@/components/StartQuizz";
import CenterLayout from "@/components/layout/CenterLayout";
import { generateArrayQuizz } from "@/lib/quizz";
import React from "react";

const page = () => {
  const data = generateArrayQuizz();
  return (
    <div>
      <CenterLayout>
        <StartQuizz questions={data} />
      </CenterLayout>
    </div>
  );
};

export default page;
