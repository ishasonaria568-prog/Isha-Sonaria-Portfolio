import React from 'react';

interface CyberMonogramProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withRing?: boolean;
}

const sizeClasses = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-14 h-14 text-xl',
  xl: 'w-20 h-20 text-3xl',
};

export const CyberMonogram: React.FC<CyberMonogramProps> = ({
  size = 'md',
  className = '',
  withRing = false,
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full font-mono font-bold select-none transition-transform hover:scale-105 ${sizeClass} ${
        withRing ? 'ring-2 ring-[#ff5a36] ring-offset-2 ring-offset-white dark:ring-offset-[#090e17]' : ''
      } ${className}`}
      style={{
        backgroundColor: '#12355b',
        color: '#ffffff',
      }}
      aria-label="IS Monogram"
    >
      <span className="tracking-tighter">is</span>
      <span
        className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full border border-white dark:border-[#090e17]"
        style={{ backgroundColor: '#ff5a36' }}
        aria-hidden="true"
      />
    </div>
  );
};
