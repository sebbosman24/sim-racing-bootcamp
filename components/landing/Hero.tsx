import Link from "next/link";

export function Hero() {
  return (
    <div className="h-screen overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-2xl">
        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#ededed] leading-tight mb-10">
          You&apos;ve watched the races.
          <br />
          <span className="text-[#F67A22]">Now drive them.</span>
        </h1>

        {/* CTA */}
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F67A22] hover:bg-[#D4611A] active:bg-[#B5521A] text-white font-semibold text-sm sm:text-base transition-colors duration-150"
        >
          Discover your Driver DNA
          <span aria-hidden>→</span>
        </Link>

      </div>
    </div>
  );
}
