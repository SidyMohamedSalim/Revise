"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { QuizQuestion } from "@/lib/data";
import { AlertCircle, CheckCircle } from "lucide-react";

export type optionType = {
  value: string;
  id: "choiceA" | "choiceB" | "choiceC" | "choiceD" | undefined;
};

export function QuizzForm({ question }: { question: QuizQuestion }) {
  const [option, setOption] = useState<optionType>({
    id: undefined,
    value: "",
  });
  const ids: optionType["id"][] = ["choiceA", "choiceB", "choiceC", "choiceD"];
  return (
    <div className="border p-4 my-20 text-sm">
      <Progress defaultValue={30} max={100} />

      <h3 className="font-bold text-xl my-6">{question.question}</h3>

      {/* options */}
      <div>
        {question.options.map((el, index) => (
          <Option
            isSubmit={false}
            correctAnswer={question.correctAnswer}
            key={el}
            id={ids[index]}
            value={el}
            isSelected={el === ids[index]}
            setOption={setOption}
          />
        ))}
      </div>

      {/* actions */}

      <div className="flex gap-3 justify-end items-center   ">
        <Button variant={"destructive"}>Return</Button>
        <Button variant={"success"}>Valider la reponse</Button>
      </div>
    </div>
  );
}

export const Option = ({
  id,
  value,
  isSelected = false,
  setOption,
  isSubmit = false,
  correctAnswer,
}: {
  value: string;
  setOption: Dispatch<SetStateAction<optionType>>;
  id: optionType["id"];
  isSelected: boolean;
  isSubmit: boolean;
  correctAnswer: string;
}) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setOption({
          value: value,
          id: id,
        });
      }}
      className={cn(
        "flex border border-accent rounded-sm  my-4 text-start justify-between items-center whitespace-normal p-4 ",
        {
          "border-blue-600": isSelected,
          "border-green-600": value === correctAnswer && isSubmit,
          "border-red-600": isSelected && value !== correctAnswer && isSubmit,
        }
      )}
    >
      <label htmlFor={id}>{value}</label>
      <Input className="hidden" type="radio" id={id} name="quizz"></Input>
      {isSelected && value !== correctAnswer && isSubmit && (
        <AlertCircle color="red" />
      )}
      {value === correctAnswer && isSubmit && <CheckCircle color="green" />}
    </div>
  );
};
