import Image from "next/image";

/* ── Paw print SVG used as decorative element ─────────────── */
function PawDecor({
  size = 40,
  opacity = 0.5,
  style,
}: {
  size?: number;
  opacity?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={{ fill: "#1a2040", opacity, ...style }}
    >
      <ellipse cx="50" cy="66" rx="24" ry="20" />
      <ellipse cx="20" cy="42" rx="12" ry="10" />
      <ellipse cx="37" cy="28" rx="12" ry="10" />
      <ellipse cx="63" cy="28" rx="12" ry="10" />
      <ellipse cx="80" cy="42" rx="12" ry="10" />
    </svg>
  );
}

/* ── Bone SVG ─────────────────────────────────────────────── */
function BoneDecor() {
  return (
    <svg
      viewBox="0 0 120 50"
      xmlns="http://www.w3.org/2000/svg"
      width={90}
      height={38}
      style={{ fill: "#b0b8c1", opacity: 0.65 }}
    >
      <circle cx="18" cy="14" r="12" />
      <circle cx="18" cy="36" r="12" />
      <circle cx="102" cy="14" r="12" />
      <circle cx="102" cy="36" r="12" />
      <rect x="18" y="16" width="84" height="18" rx="9" />
    </svg>
  );
}

/* ── Sparkle SVG ──────────────────────────────────────────── */
function Sparkle({
  size = 18,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ fill: "#f5c218", ...style }}
    >
      <path d="M12 2 l1.8 7.2 7.2 1.8-7.2 1.8-1.8 7.2-1.8-7.2-7.2-1.8 7.2-1.8z" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex items-center"
      style={{ background: "#cde89a" }}
    >
      {/* ── Background morphing blobs ── */}
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.38)",
          animation: "var(--animate-blob)",
        }}
      />
      <div
        className="absolute -top-20 right-0 w-[400px] h-[420px] pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.28)",
          animation: "var(--animate-blob-alt)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[600px] h-[220px] pointer-events-none"
        style={{
          background: "rgba(185,225,130,0.55)",
          borderRadius: "60% 40% 0 0 / 80% 80% 0 0",
        }}
      />

      {/* ── Floating sparkles (background) ── */}
      <div
        className="absolute top-16 left-[18%] pointer-events-none"
        style={{ animation: "var(--animate-spark-a)" }}
      >
        <Sparkle size={14} />
      </div>
      <div
        className="absolute top-32 left-[8%] pointer-events-none"
        style={{ animation: "var(--animate-spark-b)" }}
      >
        <Sparkle size={10} style={{ opacity: 0.6 }} />
      </div>
      <div
        className="absolute bottom-28 left-[30%] pointer-events-none"
        style={{ animation: "var(--animate-spark-c)" }}
      >
        <Sparkle size={12} style={{ opacity: 0.5 }} />
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-16">
        {/* ════════ LEFT — text ════════ */}
        <div className="flex flex-col gap-5 max-w-xl">
          {/* Tag line */}
          <div
            className="flex items-center gap-2 w-fit"
            style={{ animation: "var(--animate-tag)" }}
          >
            <PawDecor size={20} opacity={0.75} />
            <span
              className="text-[15px] font-semibold tracking-wide"
              style={{ color: "#1a2040" }}
            >
              Your Trusted Pet Care Hub
            </span>
            <PawDecor size={20} opacity={0.75} />
          </div>

          {/* Heading */}
          <div>
            <h1
              className="text-[52px] leading-[1.1] font-black"
              style={{ color: "#1a2040", animation: "var(--animate-h1-a)" }}
            >
              Everything Your Pet
            </h1>
            <h1
              className="text-[52px] leading-[1.1] font-black"
              style={{ color: "#1a2040", animation: "var(--animate-h1-b)" }}
            >
              Needs,{" "}
              <span
                className="relative inline-block"
                style={{ color: "#1a2040" }}
              >
                In One Place
                {/* underline accent */}
                <span
                  className="absolute bottom-0 left-0 h-[5px] w-full rounded-full"
                  style={{
                    background: "#f5c218",
                    opacity: 0.7,
                    animation: "var(--animate-h1-b)",
                  }}
                />
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            className="text-[15px] leading-relaxed max-w-[430px]"
            style={{
              color: "rgba(26,32,64,0.7)",
              animation: "var(--animate-body)",
            }}
          >
            Discover premium pet food, toys, grooming, and expert care services
            — all designed to keep your pets healthy, happy, and loved. Shop
            easily and book trusted care anytime.&nbsp;🐾
          </p>

          {/* CTA */}
          <div style={{ animation: "var(--animate-cta)" }}>
            <button
              className="btn-shimmer inline-flex items-center gap-2 px-9 py-4 rounded-full text-[16px] font-bold shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "#f5c218",
                color: "#1a2040",
                boxShadow: "0 8px 28px rgba(245,194,24,0.38)",
              }}
            >
              Shop Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Bone decoration */}
          <div className="mt-2" style={{ animation: "var(--animate-bone)" }}>
            <BoneDecor />
          </div>
        </div>

        {/* ════════ RIGHT — image ════════ */}
        <div className="relative flex items-center justify-center min-h-[460px]">
          {/* Floating paw prints */}
          <div
            className="absolute top-6 right-10 pointer-events-none"
            style={{ animation: "var(--animate-paw-a)" }}
          >
            <PawDecor size={48} opacity={0.55} />
          </div>
          <div
            className="absolute top-20 right-2 pointer-events-none"
            style={{ animation: "var(--animate-paw-b)" }}
          >
            <PawDecor size={34} opacity={0.35} />
          </div>
          <div
            className="absolute bottom-16 left-6 pointer-events-none"
            style={{ animation: "var(--animate-paw-c)" }}
          >
            <PawDecor size={26} opacity={0.3} />
          </div>

          {/* Yellow animated blob behind image */}
          <div
            className="absolute w-70 h-70 pointer-events-none"
            style={{
              background: "#f5c218",
              animation: "var(--animate-yellow-blob)",
              opacity: 0.88,
              zIndex: 0,
            }}
          />

          {/* Floating ring around image */}
          <div
            className="absolute w-80 h-80 rounded-full border-[3px] border-dashed pointer-events-none"
            style={{
              borderColor: "rgba(245,194,24,0.4)",
              animation: "spinSlow 25s linear infinite",
              zIndex: 0,
            }}
          />

          {/* Pet image — floating */}
          <div
            className="relative z-10 select-none"
            style={{ animation: "var(--animate-float)" }}
          >
            <Image
              src="/pet-care-hero.jpg"
              alt="A happy golden retriever and tabby cat together"
              width={420}
              height={360}
              className="object-contain drop-shadow-2xl"
              priority
              style={{ animation: "var(--animate-image)" }}
            />
          </div>

          {/* Sparkles near image */}
          <div
            className="absolute top-10 left-16 pointer-events-none"
            style={{ animation: "var(--animate-spark-b)", zIndex: 11 }}
          >
            <Sparkle size={22} />
          </div>
          <div
            className="absolute bottom-24 right-16 pointer-events-none"
            style={{ animation: "var(--animate-spark-c)", zIndex: 11 }}
          >
            <Sparkle size={16} style={{ opacity: 0.7 }} />
          </div>
        </div>
      </div>

      {/* ── Bottom wave ── */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: 60 }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

import React from "react";
