export type CalculatorHeaderProps = {
  heading: string;
  description: string;
};

function CalculatorHeader({ heading, description }: CalculatorHeaderProps) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold">{heading}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default CalculatorHeader;
