"use client";

import React, { FormEvent } from "react";
import { TextArea } from "./ui/textarea";
import { Button } from "./ui/button";
import { CreateChatCompletionRequestMessage } from "openai/resources";
import OpenAI from "openai";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "./ui/loader";

const TextForm = () => {
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
        messages: [
          {
            role: "system",
            content:
              "You will be provided with unstructured data, and your task is to parse it into JSON format",
          },
          TexteUser,
        ],
        temperature: 0,
        max_tokens: 256,
      }),

    onSuccess: () => {},
    onError: () => {},
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = String(formData.get("user"));

    const TexteUser = {
      role: "user",
      content: user,
    } satisfies CreateChatCompletionRequestMessage;

    mutation.mutate({ TexteUser });

    if (mutation.data) {
      console.log(mutation.data);
    }
    console.log(mutation.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="py-4 font-bold text-lg">
        Generer un examen à partir d&apos;un texte donnée
      </h3>
      <fieldset className="flex items-end gap-2 flex-col ">
        <div className="w-full">
          <TextArea name="user" label="Entrez le texte" />
        </div>
        <Button
          disabled={mutation.isPending}
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
