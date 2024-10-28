import { bgColors } from '@/constants';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import * as S from '@/components/common/ColorChip/index.styles';

interface ColorChipProps {
  colorType: string;
}

const ColorChip = ({ colorType }: ColorChipProps) => {
  const [color, setColor] = useState(colorType);
  const { closeModal } = useModalContext();

  return (
    <S.ColorChipContainer>
      <S.ChipSetGroup>
        {bgColors.map(({ bgColor, name }) => (
          <S.ChipSet key={bgColor}>
            <input
              type="radio"
              id={bgColor}
              value={bgColor}
              checked={color === bgColor}
              name="colors"
              className="hidden"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <S.ChipLabel htmlFor={bgColor}>
              <S.Chip bg={bgColor} />
              <S.ChipName isSelectedColor={color === bgColor}>
                {name}
              </S.ChipName>
              {color === bgColor && <FaCheck />}
            </S.ChipLabel>
          </S.ChipSet>
        ))}
      </S.ChipSetGroup>
      <Button
        classProp="w-full h-14 text-lg bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => closeModal(color)}
      >
        확인
      </Button>
    </S.ColorChipContainer>
  );
};

export default ColorChip;
