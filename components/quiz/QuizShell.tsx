"use client";

import { useRouter } from "next/navigation";
import { QUIZ_QUESTIONS } from "@/lib/quiz-config";
import { QuizAnswers } from "@/lib/types";
import { useQuizReducer } from "./useQuizReducer";
import { QuizStep } from "./QuizStep";
import { ArrowLeft } from "lucide-react";

export function QuizShell() {
  const router = useRouter();
  const { state, dispatch } = useQuizReducer();

  const { currentStep, answers, totalSteps } = state;
  const progressPercent = (currentStep / totalSteps) * 100;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleAnswer = (questionId: string, tag: string) => {
    dispatch({
      type: "ANSWER",
      questionId: questionId as keyof QuizAnswers,
      tag,
    });

    // If this was the last question, submit
    if (currentStep === totalSteps - 1) {
      const finalAnswers = {
        ...answers,
        [questionId]: tag,
      } as QuizAnswers;

      // Store answers in sessionStorage and navigate to results
      sessionStorage.setItem("quizAnswers", JSON.stringify(finalAnswers));
      router.push("/results");
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      router.push("/");
    } else {
      dispatch({ type: "BACK" });
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#0a0a0a] flex flex-col">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-[#9ca3af] hover:text-[#ededed] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            {currentStep === 0 ? "Home" : "Back"}
          </button>
          <span className="text-[#9ca3af] text-sm">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4">
        <div className="max-w-xl mx-auto h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F67A22] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-4 py-8">
        <div className="max-w-xl mx-auto">
          {currentQuestion && (
            <QuizStep
              key={currentStep}
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-6 text-center">
        <p className="text-[#4b5563] text-xs">
          Powered by <span className="text-[#9ca3af]">Track Titan</span>
        </p>
      </div>
    </div>
  );
}
