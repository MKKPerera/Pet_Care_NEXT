import React from "react";

export default function Navbar() {
  return (
    <header
      className="bg-white shadow-sm sticky top-0 z-50"
      style={{ animation: "var(--animate-slide-down)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2 shrink-0 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{ background: "#f5c218" }}
            >
              <PawSVG className="w-5 h-5" style={{ fill: "#1a2040" }} />
            </div>
            <span
              className="text-[22px] font-black tracking-tight"
              style={{ color: "#1a2040" }}
            >
              Petly
            </span>
          </a>

          {/* ── Nav links ── */}
          <nav className="hidden md:flex items-center gap-7">
            {(["HOME", "COLLECTIONS", "PRODUCT", "PAGES", "BLOGS"] as const).map(
              (label, i) => (
                <a
                  key={label}
                  href="#"
                  className="nav-link relative text-[13px] font-semibold tracking-wide flex items-center gap-0.75 transition-colors duration-200"
                >
                  {label}
                  {i === 0 && <ChevronSVG />}
                </a>
              )
            )}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-1">
            <button className="hidden md:flex items-center gap-1 text-[13px] font-medium px-3 py-2 rounded-lg transition-all duration-200 nav-link">
              English <ChevronSVG />
            </button>

            <div className="w-px h-5 bg-gray-200 mx-1 hidden md:block" />

            {([
              ["Search",   <SearchSVG key="s" />],
              ["Account",  <UserSVG   key="u" />],
              ["Wishlist", <HeartSVG  key="h" />],
              ["Cart",     <CartSVG   key="c" />],
            ] as [string, React.ReactNode][]).map(([label, icon]) => (
              <button
                key={label}
                aria-label={label}
                className="icon-btn w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CSS hover helpers */}
      <style>{`
        .nav-link { color: #1a2040; }
        .nav-link:hover { color: #f5c218; }
        .icon-btn { color: #1a2040; }
        .icon-btn:hover { color: #f5c218; background: rgba(245,194,24,0.1); }
      `}</style>
    </header>
  );
}

/* ── Inline SVGs ───────────────────────────────────────────── */

function PawSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <ellipse cx="50" cy="66" rx="24" ry="20" />
      <ellipse cx="20" cy="42" rx="12" ry="10" />
      <ellipse cx="37" cy="28" rx="12" ry="10" />
      <ellipse cx="63" cy="28" rx="12" ry="10" />
      <ellipse cx="80" cy="42" rx="12" ry="10" />
    </svg>
  );
}

function ChevronSVG() {
  return (
    <svg
      className="w-3 h-3 opacity-55"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    >
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}

function SearchSVG() {
  return (
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function UserSVG() {
  return (
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function HeartSVG() {
  return (
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartSVG() {
  return (
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
