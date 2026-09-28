import React from 'react';

export interface ArrowUpRightIconProps {
  className?: string;
}

export const ArrowUpRightIcon: React.FC<ArrowUpRightIconProps> = ({
  className = 'w-[19px] h-[19px]',
}) => (
  <svg
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M13.4578 13.4577V5.5423H5.54236M13.4578 5.5423L5.54236 13.4577"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
