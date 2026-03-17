"use client";

import { DriverDNA } from "@/lib/types";

interface DriverDNASectionProps {
  dna: DriverDNA;
  shareId: string;
}

const ICONS = ["⚡", "◎", "▲", "◆"];

export function DriverDNASection({ dna, shareId }: DriverDNASectionProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://simracingbootcamp.com";
  const cardUrl = `${baseUrl}/card/${shareId}`;

  const tweetText = encodeURIComponent(
    `I just got my sim racing Driver DNA — I'm "${dna.archetype_name}". What's yours?`
  );
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(cardUrl)}`;
  const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(cardUrl)}&title=${encodeURIComponent(`My sim racing Driver DNA: ${dna.archetype_name}`)}`;

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both">
      <div className="relative rounded-2xl border border-[#F67A22]/30 bg-gradient-to-br from-[#1a0e00] via-[#141414] to-[#0a0a0a] p-6 sm:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F67A22]/5 to-transparent pointer-events-none" />

        <p className="text-[#F67A22] text-xs font-semibold tracking-widest uppercase mb-4">
          Your Driver DNA
        </p>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#ededed] leading-tight mb-6">
          {dna.archetype_name}
        </h2>

        {/* 4-across trait row */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {dna.traits.map((trait, i) => (
            <div
              key={trait}
              className="rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] flex flex-col items-center justify-center py-3 gap-1.5"
            >
              <span className="text-[#F67A22] text-xl leading-none">{ICONS[i]}</span>
              <span className="text-[#ededed] text-[10px] font-semibold tracking-widest uppercase text-center px-1">{trait}</span>
            </div>
          ))}
        </div>

        {/* Share buttons */}
        <div className="flex gap-3">
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-black border border-[#2a2a2a] text-white text-sm font-semibold text-center hover:border-[#F67A22] transition-colors"
          >
            Share on X
          </a>
          <a
            href={redditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl border border-[#2a2a2a] text-white text-sm font-semibold text-center hover:border-[#9ca3af] transition-colors"
          >
            Share on Reddit
          </a>
        </div>
      </div>
    </div>
  );
}
