import * as S from '@/components/common/Toggle/styles';

interface ToggleProps {
  left: string;
  right: string;
  selectedOption: string;
  onSelect: (newOption: string) => void;
}

const Toggle = ({ left, right, selectedOption, onSelect }: ToggleProps) => {
  const handleClick = (newOption: string) => {
    onSelect(newOption);
  };

  return (
    <S.MbtiList>
      <S.Toggle
        className={`${
          selectedOption === left ? 'translate-x-1' : 'translate-x-40'
        } ml-1/4 mr-1/4`}
      />
      <div className="flex-1 text-center z-10">
        <input
          type="radio"
          id={left}
          className="hidden"
          checked={selectedOption === left}
          onChange={() => handleClick(left)}
        />
        <S.MbtiLabel htmlFor={left}>{left}</S.MbtiLabel>
      </div>
      <div className="flex-1 text-center z-10">
        <input
          type="radio"
          id={right}
          className="hidden"
          checked={selectedOption === right}
          onChange={() => handleClick(right)}
        />
        <S.MbtiLabel htmlFor={right}>{right}</S.MbtiLabel>
      </div>
    </S.MbtiList>
  );
};

export default Toggle;
