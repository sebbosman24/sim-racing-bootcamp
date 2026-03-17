"use client";

import { DriverDNA } from "@/lib/types";

interface ShareCardProps {
  dna: DriverDNA;
  shareId: string;
}

const ICONS = ["⚡", "◎", "▲", "◆"];

export function ShareCard({ dna, shareId }: ShareCardProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://simracingbootcamp.com";
  const cardUrl = `${baseUrl}/card/${shareId}`;

  const tweetText = encodeURIComponent(
    `I just got my sim racing Driver DNA — I'm "${dna.archetype_name}". What's yours?`
  );
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(cardUrl)}`;
  const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(cardUrl)}&title=${encodeURIComponent(`My sim racing Driver DNA: ${dna.archetype_name}`)}`;

  return (
    <div className="space-y-3">
      <h3 className="text-[#9ca3af] font-semibold text-xs tracking-widest uppercase">
        Share Your Driver DNA
      </h3>
    <div className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-5 sm:p-6">

      {/* Card preview */}
      <div className="rounded-xl bg-gradient-to-br from-[#1a0e00] to-[#0a0a0a] border border-[#F67A22]/20 p-5 mb-4">
        <p className="font-display text-2xl text-[#ededed] mb-5 leading-tight">{dna.archetype_name}</p>

        {/* 2×2 trait grid */}
        <div className="grid grid-cols-2 gap-2">
          {dna.traits.map((trait, i) => (
            <div
              key={trait}
              className="rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] flex flex-col items-center justify-center py-4 gap-2"
            >
              <span className="text-[#F67A22] text-3xl leading-none">{ICONS[i]}</span>
              <span className="text-[#ededed] text-xs font-semibold tracking-widest uppercase">{trait}</span>
            </div>
          ))}
        </div>
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
          className="flex-1 py-2.5 rounded-xl border border-[#2a2a2a] text-[#ff4500] text-sm font-semibold text-center hover:border-[#ff4500] hover:bg-[#ff4500]/5 transition-colors"
        >
          Share on Reddit
        </a>
      </div>
    </div>
    </div>
  );
}
