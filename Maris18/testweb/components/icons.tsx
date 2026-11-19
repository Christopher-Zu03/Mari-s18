// ============================================================================
// CHAPTER-SPECIFIC ICON COMPONENTS
// ============================================================================
// SVG and visual elements for each chapter's unique aesthetic

// CHAPTER 2: EL CADÁVER DE LA NOVIA - Butterfly/Moth
export function Butterfly() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#dffbff" strokeWidth="1.1" strokeLinejoin="round">
        <path fill="#26c9f1" d="M47 43C32 18 13 19 8 31c-4 10 4 25 30 29-17 6-25 18-18 27 7 8 22 1 30-15Z" />
        <path fill="#35dff8" d="M53 43C68 18 87 19 92 31c4 10-4 25-30 29 17 6 25 18 18 27-7 8-22 1-30-15Z" />
        <path fill="#159bd4" d="M47 57C27 55 13 63 20 77c5 10 19 7 30-5Z" />
        <path fill="#159bd4" d="M53 57C73 55 87 63 80 77c-5 10-19 7-30-5Z" />
        <ellipse fill="#0b2743" stroke="#bdf7ff" cx="50" cy="55" rx="5" ry="16" />
        <circle fill="#0b2743" stroke="#bdf7ff" cx="50" cy="39" r="6" />
        <path fill="none" d="M47 35C39 25 34 25 30 29M53 35C61 25 66 25 70 29" />
      </g>
    </svg>
  );
}

// CHAPTER 4: ALICIA EN EL PAÍS DE LAS MARAVILLAS - Playing Cards
export function PlayingCard() {
  return (
    <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="5" y="5" width="50" height="90" rx="3" />
        <text x="30" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="24" fill="currentColor">
          ♥
        </text>
      </g>
    </svg>
  );
}
