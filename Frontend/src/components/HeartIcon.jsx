import React from 'react';

export function HeartIcon({ filled, className }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} className={className}>
      <path
        d="M12 20.5s-7.5-4.6-10-9.3C.5 7.8 2.4 4.5 6 4.5c2.1 0 3.6 1.1 6 3.4 2.4-2.3 3.9-3.4 6-3.4 3.6 0 5.5 3.3 4 6.7-2.5 4.7-10 9.3-10 9.3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
