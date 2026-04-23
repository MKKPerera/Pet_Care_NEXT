const CATEGORIES = [
  { label: "Dogs",    emoji: "🐶", bg: "#FAE8CC", shadow: "#F0C98A" },
  { label: "Cats",    emoji: "🐱", bg: "#FAD9D5", shadow: "#F0A89E" },
  { label: "Birds",   emoji: "🐦", bg: "#E8D5F5", shadow: "#C9A8E8" },
  { label: "Fish",    emoji: "🐠", bg: "#D6F0DF", shadow: "#9ED8B5" },
  { label: "Hamster", emoji: "🐹", bg: "#D0ECF5", shadow: "#8ECFE8" },
  { label: "Rabbit",  emoji: "🐰", bg: "#F5EFD6", shadow: "#E0D09A" },
];

export default function PetCategories() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-center text-[36px] font-black mb-12"
          style={{ color: "#1a2040" }}
        >
          Pet Categories
        </h2>

        {/* Category grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {CATEGORIES.map(({ label, emoji, bg, shadow }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-3 group focus:outline-none"
            >
              {/* Card */}
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center text-[52px] transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
                style={{
                  background: bg,
                  boxShadow: `0 6px 18px ${shadow}80`,
                }}
              >
                {emoji}
              </div>
              {/* Label */}
              <span
                className="text-[15px] font-semibold"
                style={{ color: "#1a2040" }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
