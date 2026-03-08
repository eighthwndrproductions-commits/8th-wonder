export default function Logo({ className = '', size = 'default' }) {
  const sizes = {
    small: { height: 32, textClass: 'text-lg' },
    default: { height: 40, textClass: 'text-2xl' },
    large: { height: 56, textClass: 'text-4xl' },
  }
  const s = sizes[size] || sizes.default

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* 8-ball with eye/triangle conspiracy mark */}
      <svg
        height={s.height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer circle - the ball */}
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />

        {/* Inner dark circle - the 8-ball window */}
        <circle cx="24" cy="24" r="15" fill="currentColor" />

        {/* Triangle / all-seeing-eye shape inside */}
        <path
          d="M24 13 L32.5 29 L15.5 29 Z"
          fill="none"
          stroke="url(#amber-grad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* The eye in the center of the triangle */}
        <ellipse cx="24" cy="23.5" rx="4.5" ry="3" fill="none" stroke="url(#amber-grad)" strokeWidth="1.2" />
        <circle cx="24" cy="23.5" r="1.5" fill="url(#amber-grad)" />

        {/* The "8" at the bottom of the ball */}
        <text
          x="24"
          y="38"
          textAnchor="middle"
          fill="url(#amber-grad)"
          fontSize="7"
          fontWeight="800"
          fontFamily="'Space Grotesk', sans-serif"
        >
          VIII
        </text>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="amber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text mark */}
      <span className={`font-light tracking-wide font-display leading-none uppercase ${s.textClass}`}>
        8<span className="gradient-amber-text">th</span> Wonder
      </span>
    </div>
  )
}
