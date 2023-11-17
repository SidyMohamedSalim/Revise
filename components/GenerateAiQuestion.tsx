import React from "react";
import StartQuizz from "./StartQuizz";
import { generateArrayQuizz } from "@/lib/quizz";

const GenerateAiQuestion = () => {
  const data = generateArrayQuizz();

  return (
    <div>
      <StartQuizz questions={data} />
    </div>
  );
};

export default GenerateAiQuestion;
