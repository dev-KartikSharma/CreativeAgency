import React from 'react';

export interface CloseIconProps {
  className?: string;
}

export const CloseIcon: React.FC<CloseIconProps> = ({
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
      d="M11.2503 6.74993L6.74993 11.2503M6.74993 6.74993L11.2503 11.2503M16.5007 9.00011C16.5007 13.1426 13.1426 16.5007 9.00011 16.5007C4.85764 16.5007 1.49951 13.1426 1.49951 9.00011C1.49951 4.85764 4.85764 1.49951 9.00011 1.49951C13.1426 1.49951 16.5007 4.85764 16.5007 9.00011Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
