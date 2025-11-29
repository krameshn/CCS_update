export default function LogoWave() {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
      >
        {/* Wave background */}
        <circle cx="20" cy="20" r="18" fill="url(#gradient)" opacity="0.1" />

        {/* Main wave lines */}
        <path
          d="M 10 20 Q 15 15 20 20 T 30 20"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <path
          d="M 8 20 Q 13 12 18 20 T 28 20"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
          className="animate-pulse"
          style={{ animationDelay: '0.1s' }}
        />
        <path
          d="M 12 20 Q 17 18 22 20 T 32 20"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
          className="animate-pulse"
          style={{ animationDelay: '0.2s' }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
