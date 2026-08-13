/**
 * ArtON gallery wayfinding primitive.
 * Gallery Quietism: asymmetric exhibition title, plaque-like metadata,
 * and the Art Gold power glyph as a recurring navigation mark.
 */
import type { ReactNode } from "react";

export function PowerGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <path
        d="M14 3.4a10.6 10.6 0 1 1-7.5 3.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M14 1.5v11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

type GalleryHeadingProps = {
  room: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
  className?: string;
  /** Optional clamp() size for the display title, e.g. "clamp(2rem,3.4vw,3.25rem)" */
  titleSize?: string;
};

export default function GalleryHeading({
  room,
  label,
  title,
  description,
  light = false,
  className = "",
  titleSize = "clamp(3.4rem,6.2vw,6.2rem)",
}: GalleryHeadingProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <PowerGlyph className="w-5 h-5 text-[#C4A265]" />
        <span className="museum-label">Room {room} · {label}</span>
      </div>
      <h2
        className={`leading-[0.98] font-light tracking-[-0.045em] ${light ? "text-white" : "text-[#1C1C1E]"}`}
        style={{
          fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif",
          fontSize: titleSize,
        }}
      >
        {title}
      </h2>
      <span className="gold-hairline mt-8" />
      {description ? (
        <div className={`mt-7 max-w-xl text-[15px] md:text-[17px] leading-[1.9] ${light ? "text-white/62" : "text-[#1C1C1E]/52"}`}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
