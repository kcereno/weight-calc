type CalculatorHeaderProps = {
  heading: string;
  description: string;
};

function CalculatorHeader({ heading, description }: CalculatorHeaderProps) {
  return (
    <>
      <h3 className="text-2xl font-bold">{heading}</h3>
      <p className="text-sm">{description}</p>
    </>
  );
}

export default CalculatorHeader;
