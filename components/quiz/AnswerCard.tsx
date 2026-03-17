"use client";

import { cn } from "@/lib/utils";

interface AnswerCardProps {
  label: string;
  sublabel?: string;
  onClick: () => void;
}

export function AnswerCard({ label, sublabel, onClick }: AnswerCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-4 rounded-xl border border-[#2a2a2a] bg-[#141414]",
        "hover:border-[#F67A22] hover:bg-[#1a0e00]",
        "active:scale-[0.98] active:border-[#F67A22]",
        "transition-all duration-150 cursor-pointer",
        "min-h-[60px] flex flex-col justify-center gap-0.5"
      )}
    >
      <span className="font-medium text-[#ededed] text-base leading-snug">
        {label}
      </span>
      {sublabel && (
        <span className="text-sm text-[#9ca3af] leading-snug">{sublabel}</span>
      )}
    </button>
  );
}
