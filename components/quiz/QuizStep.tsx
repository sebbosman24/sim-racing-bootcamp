"use client";

import { QuizQuestion } from "@/lib/types";
import { AnswerCard } from "./AnswerCard";

interface QuizStepProps {
  question: QuizQuestion;
  onAnswer: (questionId: string, tag: string) => void;
}

export function QuizStep({ question, onAnswer }: QuizStepProps) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#ededed] leading-snug">
        {question.question}
      </h2>
      <div className="flex flex-col gap-3 mt-2">
        {question.options.map((option) => (
          <AnswerCard
            key={option.tag}
            label={option.label}
            sublabel={option.sublabel}
            onClick={() => onAnswer(question.id, option.tag)}
          />
        ))}
      </div>
    </div>
  );
}
