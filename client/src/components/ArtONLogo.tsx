/**
 * ArtON Brand Logo Component
 * Uses the official brand mark with gold power symbol
 */

export function ArtONLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 180 40" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="'Cormorant Garamond', serif" fontSize="28" fontWeight="600" fill="#1C1C1E">Art</text>
        {/* Power symbol */}
        <g transform="translate(85, 5)">
          <path d="M12 2 A10 10 0 1 1 2 12" fill="none" stroke="#C4A265" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="7" y1="2" x2="7" y2="10" stroke="#C4A265" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text x="108" y="30" fontFamily="'Cormorant Garamond', serif" fontSize="28" fontWeight="600" fill="#1C1C1E">N</text>
      </svg>
    </div>
  );
}

export function ArtONIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="10" fill="none" stroke="#C4A265" strokeWidth="2.5" />
      <line x1="16" y1="6" x2="16" y2="16" stroke="#C4A265" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
