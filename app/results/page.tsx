"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuizAnswers } from "@/lib/types";
import { ResultsStream } from "@/components/results/ResultsStream";

export default function ResultsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizAnswers");
    if (!stored) {
      router.replace("/quiz");
      return;
    }
    try {
      setAnswers(JSON.parse(stored) as QuizAnswers);
    } catch {
      router.replace("/quiz");
    }
  }, [router]);

  if (!answers) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#F67A22] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <ResultsStream answers={answers} />;
}
