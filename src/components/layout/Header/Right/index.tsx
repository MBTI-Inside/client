interface RightProps {
  children: React.ReactNode;
}

const Right = ({ children }: RightProps) => {
  return <div className="pr-4 text-2xl">{children}</div>;
};

export default Right;
