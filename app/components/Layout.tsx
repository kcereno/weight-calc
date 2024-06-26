import React from 'react';
import { twMerge } from 'tailwind-merge';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={twMerge('mx-auto bg-base-200 p-4', className)}>
      <div className="max-w-lg min-h-screen mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
