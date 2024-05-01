interface MiddleProps {
  children: React.ReactNode;
}

const Middle = ({ children }: MiddleProps) => {
  return <div className="text-2xl">{children}</div>;
};

export default Middle;
