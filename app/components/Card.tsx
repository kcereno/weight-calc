import React from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={twMerge(
        'card bg-neutral text-neutral-content w-full',
        className
      )}
    >
      <div className="p-4 ">{children}</div>
    </div>
  );
}

export default Card;
