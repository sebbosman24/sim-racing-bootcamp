"use client";

import { useEffect, useState, useCallback } from "react";
import { GeneratedResult, QuizAnswers } from "@/lib/types";
import { DriverDNASection } from "./DriverDNASection";
import { JourneySection } from "./JourneySection";
import { TrackTitanCTA } from "./TrackTitanCTA";
import { encodeCardData } from "@/lib/card-encoder";

type Phase = "lights" | "loading" | "complete" | "error";

function StartLights({ onComplete }: { onComplete: () => void }) {
  const [litCount, setLitCount] = useState(0);
  const [goOut, setGoOut] = useState(false);

  useEffect(() => {
    const intervals = [0, 350, 700, 1050, 1400].map((delay, i) =>
      setTimeout(() => setLitCount(i + 1), delay)
    );
    const outTimeout = setTimeout(() => setGoOut(true), 2000);
    const doneTimeout = setTimeout(() => onComplete(), 2500);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(outTimeout);
      clearTimeout(doneTimeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-8">
      <p className="text-[#9ca3af] text-sm tracking-widest uppercase">Generating your Driver DNA</p>
      <div className="flex gap-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-150 ${
              goOut
                ? "border-[#1a0800] bg-[#1a0e00] shadow-none"
                : litCount >= n
                ? "border-[#F67A22] bg-[#F67A22] shadow-[0_0_20px_#F67A22,0_0_40px_#F67A2280]"
                : "border-[#1a0800] bg-[#1a0e00]"
            }`}
          />
        ))}
      </div>
      <p className="text-[#4b5563] text-xs">Powered by Track Titan & Claude AI</p>
    </div>
  );
}

interface ResultsStreamProps {
  answers: QuizAnswers;
}

export function ResultsStream({ answers }: ResultsStreamProps) {
  const [phase, setPhase] = useState<Phase>("lights");
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [shareId, setShareId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchResult = useCallback(async () => {
    setPhase("loading");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error ?? "Generation failed");
      }

      const parsed = (await response.json()) as GeneratedResult;
      setResult(parsed);
      setShareId(
        encodeCardData({
          archetype_name: parsed.driver_dna.archetype_name,
          archetype_tagline: parsed.driver_dna.archetype_tagline,
          prediction: parsed.driver_dna.prediction,
          traits: parsed.driver_dna.traits,
        })
      );
      setPhase("complete");
    } catch (err) {
      console.error("Generation error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setPhase("error");
    }
  }, [answers]);

  const handleLightsComplete = useCallback(() => {
    fetchResult();
  }, [fetchResult]);

  if (phase === "lights") {
    return <StartLights onComplete={handleLightsComplete} />;
  }

  if (phase === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <p className="text-[#F67A22] text-4xl mb-4">⚠️</p>
          <h2 className="text-[#ededed] font-semibold text-xl mb-2">Generation failed</h2>
          <p className="text-[#9ca3af] text-sm mb-6">{error}</p>
          <button
            onClick={() => { setPhase("lights"); setError(null); setResult(null); }}
            className="px-4 py-2 rounded-lg bg-[#F67A22] text-white text-sm font-semibold hover:bg-[#D4611A] transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (phase === "loading") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-4">
        <div className="inline-flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-[#F67A22] animate-bounce"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
        <p className="text-[#9ca3af] text-sm">Reading your answers...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-6 px-4">
      <div className="max-w-2xl mx-auto space-y-4">

        {result && shareId && <DriverDNASection dna={result.driver_dna} shareId={shareId} />}

        <JourneySection circuit={answers.circuit} />

        <TrackTitanCTA />

      </div>
    </div>
  );
}
