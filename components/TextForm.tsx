"use client";

import React, { FormEvent, useState } from "react";
import { TextArea } from "./ui/textarea";
import { Button } from "./ui/button";
import { CreateChatCompletionRequestMessage } from "openai/resources";
import OpenAI from "openai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "./ui/loader";
import { QuizQuestion, quizData } from "@/lib/data";
import { useRouter } from "next/navigation";
import { UseQUizzStore } from "@/src/zustand/store";
import clsx from "clsx";

const TextForm = () => {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const updateQuizzData = UseQUizzStore((state) => state.updateQuizzData);
  const [data, setData] = useState<QuizQuestion[] | null>(null);
  const queryClient = useQueryClient();
  const router = useRouter();
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });

  const mutation = useMutation({
    mutationFn: ({
      TexteUser,
    }: {
      TexteUser: CreateChatCompletionRequestMessage;
    }) =>
      openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [TexteUser],
        temperature: 0.7,
        max_tokens: 500,
      }),
    onSettled: () => {
      queryClient.cancelQueries();
      const data = mutation.data?.choices[0].message.content;
      if (data) {
        const parseData: QuizQuestion[] = JSON.parse(data);
        updateQuizzData(parseData);
      }
      router.refresh();
    },

    onError: () => {},
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = String(formData.get("user"));

    const TexteUser = {
      role: "user",
      content: `Créez une JSON avec 3 questions pertinentes permettant de reviser tous les sujets du texte en objet de la forme  {question: string;options: string[];correctAnswer: string;} (4 options pour chaque question et une correctAnswer) basée sur les informations suivante  :  je veux uniquement les questions.NB:meme pas une texte de ta part: juste les questions . Il ne faut pas oublier je veux un format JSON sans ecrire aucun mot de ta part uniquement le tableau. Voici le texte : ${user}`,
    } satisfies CreateChatCompletionRequestMessage;

    await mutation.mutate({ TexteUser });
  };

  if (mutation.status === "success") {
    const data = mutation.data?.choices[0].message.content;
    if (data) {
      updateQuizzData(JSON.parse(data));
      router.push("/quizz/game");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="py-4 font-bold text-lg">
        Generer un examen à partir d&apos;un texte donné
      </h3>
      <fieldset name="user" className="flex items-end gap-2 flex-col ">
        <div className="w-full">
          <TextArea
            max={500}
            count={textAreaCount}
            onChange={(e) => {
              setTextAreaCount(e.currentTarget.value.length);
            }}
            name="user"
            label="Entrez le texte"
          />
          <p
            className={clsx("text-end my-4", {
              "text-red-400": textAreaCount > 6000,
            })}
          >
            {textAreaCount} / 6000
          </p>
        </div>
        <Button
          disabled={mutation.isPending || textAreaCount > 6000}
          className="bg-green-500"
          type="submit"
        >
          {mutation.isPending ? "creation..." : "Generer"}
        </Button>
      </fieldset>
    </form>
  );
};

export default TextForm;
