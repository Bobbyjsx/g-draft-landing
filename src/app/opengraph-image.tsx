import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "g-draft ✦ Your terminal's ghostwriter";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            width: "120px",
            height: "120px",
            background: "#EF4444",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            boxShadow: "0 0 60px rgba(239, 68, 68, 0.3)",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M125.5 140C111.5 140 100.5 136 92.5 128C84.5 120 80.5 108.5 80.5 93.5C80.5 78.5 84.5 67 92.5 59C100.5 51 111.5 47 125.5 47C139.5 47 150 51 157 59L138.5 76C135.5 71.3333 131.167 69 125.5 69C120.167 69 116 71.3333 113 76C110 80.6667 108.5 86.5 108.5 93.5C108.5 100.5 110 106.333 113 111C116 115.667 120.167 118 125.5 118C131.167 118 135.5 115.667 138.5 111V102H123.5V86H163.5V125C163.5 129.667 162.333 133.333 160 136C157.667 138.667 154.333 140 150 140H125.5Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              letterSpacing: "-0.05em",
              marginBottom: "16px",
            }}
          >
            g-draft
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#A1A1AA",
              maxWidth: "800px",
              lineHeight: "1.4",
            }}
          >
            Your terminal&apos;s ghostwriter. Automate commits, PRs, and audits
            with AI.
          </div>
        </div>

        {/* BYOA Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            padding: "8px 24px",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            borderRadius: "9999px",
            color: "#EF4444",
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          Bring Your Own Agent
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
