"use client";

export function TrackTitanCTA() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both">
      <div className="rounded-2xl border border-[#F67A22]/30 bg-gradient-to-br from-[#1a0e00] to-[#0a0a0a] p-6 text-center space-y-4">
        <p className="text-[#F67A22] text-xs font-semibold tracking-widest uppercase">Ready to Race</p>
        <p className="text-[#ededed] text-base leading-relaxed">
          Your Driver DNA is just the start. Track Titan&apos;s telemetry will show you exactly
          how your natural style plays out on circuit — and where the tenths are hiding.
        </p>
        <a
          href="https://www.tracktitan.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#F67A22] hover:bg-[#D4611A] active:bg-[#B5521A] text-white font-bold text-base transition-colors duration-150"
        >
          Go to Track Titan
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
