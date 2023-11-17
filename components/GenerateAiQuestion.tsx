import React from "react";
import StartQuizz from "./StartQuizz";
import { generateArrayQuizz } from "@/lib/quizz";
import TextForm from "./TextForm";

const GenerateAiQuestion = () => {
  const data = generateArrayQuizz();

  return (
    <div>
      <TextForm />
      {/* <StartQuizz questions={data} /> */}
    </div>
  );
};

export default GenerateAiQuestion;
