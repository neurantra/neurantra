interface NeurantraLogoProps {
  size?: number;
  className?: string;
  title?: string;
}

export function NeurantraLogo({
  size = 28,
  className,
  title = "Neurantra",
}: NeurantraLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <path d="M 14 32 A 6 6 0 0 1 26 32" strokeWidth="2.4" />
      <path d="M 9 32 A 11 11 0 0 1 31 32" strokeWidth="2.4" />
      <path d="M 4 32 A 16 16 0 0 1 36 32" strokeWidth="2.4" />
      <circle cx="20" cy="32" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
