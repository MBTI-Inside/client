interface LeftProps {
  children: React.ReactNode;
}

const Left = ({ children }: LeftProps) => {
  return <div className="pl-4 text-2xl">{children}</div>;
};

export default Left;
