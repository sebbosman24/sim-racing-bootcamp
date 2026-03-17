import Link from "next/link";
import { decodeCardData } from "@/lib/card-encoder";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const data = decodeCardData(id);
  if (!data) return {};
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://simracingbootcamp.com";
  return {
    title: `${data.archetype_name} — Sim Racing Bootcamp`,
    description: data.archetype_tagline,
    openGraph: {
      title: `${data.archetype_name} — Sim Racing Bootcamp`,
      description: data.prediction,
      images: [`${baseUrl}/card/${id}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.archetype_name} — Sim Racing Bootcamp`,
      description: data.prediction,
      images: [`${baseUrl}/card/${id}/opengraph-image`],
    },
  };
}

export default async function CardPage({ params }: PageProps) {
  const { id } = await params;
  const data = decodeCardData(id);
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full space-y-6">
        {/* Card */}
        <div className="rounded-2xl border border-[#F67A22]/30 bg-gradient-to-br from-[#1a0e00] via-[#141414] to-[#0a0a0a] p-8 text-center">
          <p className="text-[#F67A22] text-xs font-semibold tracking-widest uppercase mb-4">
            SIM RACING BOOTCAMP
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-[#ededed] mb-3">
            {data.archetype_name}
          </h1>
          <p className="text-[#9ca3af] text-base mb-5 leading-relaxed">
            {data.archetype_tagline}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {data.traits.map((trait) => (
              <span
                key={trait}
                className="px-3 py-1 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] text-[#9ca3af] text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
          <div className="border-t border-[#2a2a2a] pt-4">
            <p className="text-[#9ca3af] text-sm italic leading-relaxed">
              &ldquo;{data.prediction}&rdquo;
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-3">
          <p className="text-[#9ca3af] text-sm">What&apos;s your Driver DNA?</p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F67A22] hover:bg-[#D4611A] text-white font-semibold text-sm transition-colors"
          >
            Take the Quiz →
          </Link>
        </div>
      </div>
    </div>
  );
}
