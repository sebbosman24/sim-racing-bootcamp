"use client";

import { CircuitTag } from "@/lib/types";

const CIRCUIT_NAMES: Record<CircuitTag, string> = {
  silverstone: "Silverstone",
  monaco: "Monaco",
  spa: "Spa-Francorchamps",
  monza: "Monza",
  suzuka: "Suzuka",
  interlagos: "Interlagos",
  singapore: "Singapore",
  bahrain: "Bahrain",
};

interface JourneySectionProps {
  circuit: CircuitTag;
}

export function JourneySection({ circuit }: JourneySectionProps) {
  const STEPS = [
    { number: 1, title: `Learn your favourite track: ${CIRCUIT_NAMES[circuit]}`, tip: "Start somewhere you already know from watching F1. One less thing to think about means one more thing you can feel." },
    { number: 2, title: "Discover the racing line", tip: "Late apex, wide exit — learn it once and it works everywhere. The line isn't about the corner, it's about what comes after it." },
    { number: 3, title: "Pick your braking points", tip: "Find a fixed landmark, hit it every lap, then move it later. Consistency first, bravery second." },
    { number: 4, title: "Smooth is fast", tip: "Squeeze onto the throttle, don't stab it. The car rewards patience — every abrupt input is grip you're leaving on the table." },
  ];
  return (
    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both">
      <h3 className="text-[#9ca3af] font-semibold text-xs tracking-widest uppercase">Your Rookie Season</h3>
      <div className="px-0 py-2">
        {STEPS.map((step, i) => (
          <div key={step.number} className="relative flex gap-4 py-4">
            {i < STEPS.length - 1 && (
              <div className="absolute left-[15px] top-[40px] bottom-0 w-px bg-[#2a2a2a]" />
            )}
            <div className="shrink-0 w-8 h-8 rounded-full border-2 border-[#F67A22] bg-[#1a0e00] flex items-center justify-center z-10">
              <span className="text-[#F67A22] text-xs font-bold">{step.number}</span>
            </div>
            <div className="pt-0.5">
              <p className="text-[#ededed] font-semibold text-sm leading-snug">{step.title}</p>
              <p className="text-[#9ca3af] text-xs leading-relaxed mt-1">{step.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
