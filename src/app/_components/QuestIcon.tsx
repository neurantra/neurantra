type QuestName = "math" | "word" | "tide" | "alpha";

interface QuestVisual {
  color: string;
  glyph: React.ReactNode;
  glyphScale: number;
}

const VISUALS: Record<QuestName, QuestVisual> = {
  math: {
    color: "#4F46E5",
    glyph: "Σ",
    glyphScale: 0.62,
  },
  word: {
    color: "#7C3AED",
    glyph: <span style={{ letterSpacing: "-0.04em" }}>Aa</span>,
    glyphScale: 0.42,
  },
  tide: {
    color: "#B45309",
    glyph: <WaveGlyph />,
    glyphScale: 0.62,
  },
  alpha: {
    color: "#06B6D4",
    glyph: "α",
    glyphScale: 0.68,
  },
};

function WaveGlyph() {
  return (
    <svg
      viewBox="0 0 100 67"
      width="62%"
      height="42%"
      stroke="white"
      strokeWidth={12}
      strokeLinecap="round"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M0 19 Q 25 4 50 19 Q 75 34 100 19" />
      <path d="M0 48 Q 25 33 50 48 Q 75 63 100 48" />
    </svg>
  );
}

export function QuestIcon({
  name,
  size = 56,
}: {
  name: QuestName;
  size?: number;
}) {
  const { color, glyph, glyphScale } = VISUALS[name];
  const radius = Math.round(size * 0.22);

  return (
    <div
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(135deg, ${color}, color-mix(in srgb, ${color} 62%, black))`,
        border: `1.4px solid color-mix(in srgb, ${color} 75%, white)`,
        boxShadow: `0 0 9px 0.5px color-mix(in srgb, ${color} 45%, transparent)`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: 900,
        fontSize: Math.round(size * glyphScale),
        lineHeight: 1,
      }}
    >
      {glyph}
    </div>
  );
}
