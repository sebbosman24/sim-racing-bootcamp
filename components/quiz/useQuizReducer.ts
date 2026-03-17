"use client";

import { useReducer } from "react";
import { QuizState, QuizAction, QuizAnswers } from "@/lib/types";
import { TOTAL_STEPS } from "@/lib/quiz-config";

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "ANSWER": {
      const newAnswers = {
        ...state.answers,
        [action.questionId]: action.tag,
      } as Partial<QuizAnswers>;

      return {
        ...state,
        answers: newAnswers,
        currentStep: Math.min(state.currentStep + 1, state.totalSteps),
      };
    }
    case "BACK": {
      if (state.currentStep === 0) return state;
      const questionId = Object.keys(state.answers)[state.currentStep - 1];
      const newAnswers = { ...state.answers };
      if (questionId) delete newAnswers[questionId as keyof QuizAnswers];
      return {
        ...state,
        answers: newAnswers,
        currentStep: Math.max(0, state.currentStep - 1),
      };
    }
    default:
      return state;
  }
}

export function useQuizReducer() {
  const [state, dispatch] = useReducer(quizReducer, {
    currentStep: 0,
    answers: {},
    totalSteps: TOTAL_STEPS,
  });

  return { state, dispatch };
}
