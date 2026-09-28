import React from 'react';

export interface ArrowRightIconProps {
  className?: string;
}

export const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({
  className = 'w-[18px] h-[18px]',
}) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3.74951 8.99999H14.2507M9.00011 14.2506L14.2507 8.99999L9.00011 3.74939"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
