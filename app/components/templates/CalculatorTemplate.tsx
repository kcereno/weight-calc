import React from 'react';
import { twMerge } from 'tailwind-merge';
import CalculatorHeader, {
  CalculatorHeaderProps,
} from '../molecules/headers/CalculatorHeader';
type CalculatorTemplateProps = CalculatorHeaderProps & {
  children: React.ReactNode;
  className?: string;
};

function CalculatorTemplate({
  children,
  className,
  heading,
  description,
}: CalculatorTemplateProps) {
  return (
    <div className={twMerge('mx-auto bg-base-200 p-4', className)}>
      <div className="max-w-lg min-h-screen mx-auto">
        <CalculatorHeader
          heading={heading}
          description={description}
        />
        {children}
      </div>
    </div>
  );
}

export default CalculatorTemplate;
