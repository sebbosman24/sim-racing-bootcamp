import { ImageResponse } from "next/og";
import { decodeCardData } from "@/lib/card-encoder";

export const runtime = "nodejs";
export const alt = "Sim Racing Bootcamp Driver DNA Card";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function OGImage({ params }: Props) {
  const { id } = await params;
  const data = decodeCardData(id);

  const archetypeName = data?.archetype_name ?? "The Sim Racer";
  const tagline = data?.archetype_tagline ?? "Built for the track.";
  const prediction = data?.prediction ?? "Your racing journey starts here.";
  const traits = data?.traits ?? ["Committed", "Fast", "Precise", "Bold"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage: "radial-gradient(circle at 30% 50%, #1a0e00 0%, transparent 60%)",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Red accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#F67A22",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: "14px",
            color: "#F67A22",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          SIM RACING BOOTCAMP
        </div>

        {/* Archetype name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "#ededed",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {archetypeName}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: "32px",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </div>

        {/* Traits */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "36px" }}>
          {traits.map((trait) => (
            <div
              key={trait}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid #2a2a2a",
                backgroundColor: "#141414",
                color: "#9ca3af",
                fontSize: "14px",
              }}
            >
              {trait}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "200px",
            height: "1px",
            backgroundColor: "#2a2a2a",
            marginBottom: "24px",
          }}
        />

        {/* Prediction */}
        <div
          style={{
            fontSize: "16px",
            color: "#9ca3af",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            marginBottom: "40px",
          }}
        >
          &ldquo;{prediction}&rdquo;
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#F67A22",
            }}
          />
          <span style={{ color: "#4b5563", fontSize: "13px" }}>
            Powered by Track Titan
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
