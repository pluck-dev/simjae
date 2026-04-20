import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PLUCK · 외주 개발 & 서비스 기획";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#0a0a0b",
          position: "relative",
          fontFamily: "sans-serif",
          color: "#fafafa",
          overflow: "hidden",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.45) 0%, rgba(99,102,241,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.40) 0%, rgba(168,85,247,0) 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Top label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(99,102,241,0.10)",
              border: "1px solid rgba(99,102,241,0.30)",
              color: "#a5b4fc",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: 2,
              marginBottom: 36,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            Available for Work
          </div>

          {/* PLUCK wordmark */}
          <div
            style={{
              fontSize: 220,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -8,
              backgroundImage:
                "linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 50%, #f0abfc 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 8,
            }}
          >
            PLUCK
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#fafafa",
              marginTop: 20,
              letterSpacing: -1.5,
            }}
          >
            외주 개발 &amp; 서비스 기획
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#a1a1aa",
              marginTop: 16,
              letterSpacing: -0.5,
            }}
          >
            기획부터 배포까지 1인 풀 사이클
          </div>

          {/* Footer line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 56,
              fontSize: 22,
              color: "#71717a",
              letterSpacing: 1,
            }}
          >
            <span style={{ color: "#a5b4fc", fontWeight: 600 }}>
              pluck.co.kr
            </span>
            <span style={{ color: "#3f3f46" }}>·</span>
            <span>심재형</span>
            <span style={{ color: "#3f3f46" }}>·</span>
            <span>hello@pluck.co.kr</span>
          </div>
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, transparent 0%, #6366f1 30%, #a855f7 70%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
