import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  const primaryColor = light ? '#FAF9F6' : '#0B132B';
  const accentColor = light ? '#E6E6FA' : '#4B2E83';

  return (
    <Link to="/" className={`inline-flex flex-col items-center group ${className}`} aria-label="Ifẹ́mi Lifestyle Homepage">
      {/* Editorial High-Fashion Wordmark */}
      <div className="flex items-center tracking-tight select-none">
        <span 
          className="font-playfair font-black text-2xl md:text-3xl lowercase transition-colors"
          style={{ color: primaryColor, letterSpacing: '-0.03em' }}
        >
          ifẹ́mi
        </span>
      </div>
      <span 
        className="text-[8px] md:text-[9px] uppercase tracking-[0.45em] font-medium mt-[-2px] transition-colors"
        style={{ color: accentColor }}
      >
        lifestyle
      </span>
    </Link>
  );
}
