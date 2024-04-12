interface ProgressProps {
  color: string; //
  bgColor: string;
  value: number;
}

const Progress = ({ color, bgColor, value }: ProgressProps) => {
  return (
    <progress
      className={`progress progress-${color} ${bgColor} w-44 `}
      value={value ?? 30}
      max={100}
    />
  );
};

export default Progress;
