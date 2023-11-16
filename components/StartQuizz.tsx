"use client";
import { QuizQuestion } from "@/lib/data";
import React, { useState } from "react";
import { Option, optionType } from "./QuizzForm";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Progress } from "./ui/progress";

export type QuizzProgressType = {
  currentIndex: number;
  numberQuestions: number;
  score: number;
};

const StartQuizz = ({ questions }: { questions: QuizQuestion[] }) => {
  const [option, setOption] = useState<optionType>({
    value: "",
    id: undefined,
  });
  const ids: optionType["id"][] = ["choiceA", "choiceB", "choiceC", "choiceD"];
  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState(false);

  const [Quizzprogress, SetQuizzProgress] = useState<QuizzProgressType>({
    currentIndex: 0,
    numberQuestions: questions.length,
    score: 0,
  });

  const CurrentQuestion = questions[Quizzprogress.currentIndex];
  console.log(Quizzprogress);
  console.log(option);

  // start Game
  const onSubmitGame = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsSubmit(true);

    setTimeout(() => {
      if (Quizzprogress.currentIndex <= Quizzprogress.numberQuestions - 1) {
        if (CurrentQuestion.correctAnswer === option.value) {
          SetQuizzProgress((current) => {
            return {
              ...current,
              score: current.score + 1,
            };
          });
        }
        if (Quizzprogress.currentIndex == Quizzprogress.numberQuestions - 1) {
          // end  Quizz
          alert("termine");
        } else {
          // Continue Next Question
          SetQuizzProgress((current) => {
            return {
              ...current,
              currentIndex: current.currentIndex + 1,
            };
          });
        }

        setIsSubmit(false);
        setOption({
          value: "",
          id: undefined,
        });
        router.refresh();
      }
    }, 1000);
  };

  // confeettit

  return (
    <div>
      <div className="border p-4 my-20 text-sm">
        <div>
          <p className="font-bold my-2 justify-end flex gap-4 items-center ">
            <span>
              {Quizzprogress.currentIndex + 1} / {Quizzprogress.numberQuestions}
            </span>
            <span>Score : {Quizzprogress.score}</span>
          </p>
          <Progress
            value={Quizzprogress.currentIndex + 1}
            max={Quizzprogress.numberQuestions}
          />
        </div>
        <h3 className="font-bold text-xl my-6">{CurrentQuestion.question}</h3>
        <div>
          {CurrentQuestion.options.map((el, index) => (
            <Option
              key={el}
              isSubmit={isSubmit}
              correctAnswer={CurrentQuestion.correctAnswer}
              id={ids[index]}
              value={el}
              isSelected={option.id === ids[index]}
              setOption={setOption}
            />
          ))}
        </div>

        {/* actions */}

        <div className="flex gap-3 justify-end items-center">
          <Button variant={"destructive"}>Terminé</Button>
          <Button
            id="btn-canva"
            variant={"success"}
            onClick={async (e) => {
              onSubmitGame(e);
            }}
          >
            Valider la reponse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartQuizz;