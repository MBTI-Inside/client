import { mbtiOptions } from '@/constants';
import { useReducer } from 'react';

import { useModalContext } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import * as S from '@/components/common/MBTITypes/styles';
import Toggle from '@/components/common/Toggle';

interface ToggleState {
  energy: string;
  awareness: string;
  judgement: string;
  life: string;
}

interface Action {
  type: string;
  payload: {
    id: string;
    option: string;
  };
}

const initialState = (mbtiType: string): ToggleState => ({
  energy: mbtiType[0], // 첫 번째 문자: E/I
  awareness: mbtiType[1], // 두 번째 문자: S/N
  judgement: mbtiType[2], // 세 번째 문자: T/F
  life: mbtiType[3] // 네 번째 문자: J/P
});

const reducer = (state: ToggleState, action: Action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, [action.payload.id]: action.payload.option };
    default:
      return state;
  }
};

interface MBTITypesProps {
  mbtiType: string;
}

const MBTITypes = ({ mbtiType }: MBTITypesProps) => {
  const { closeModal } = useModalContext();
  const [state, dispatch] = useReducer(reducer, initialState(mbtiType));

  const doSomething = () => {
    // Do something with state
    closeModal(
      `${state.energy}${state.awareness}${state.judgement}${state.life}`
    );
  };

  return (
    <S.MBTITypesContainer>
      {Object.entries(state).map(([id, selectedOption]) => {
        const { left, right } = mbtiOptions[id];
        return (
          <Toggle
            key={id}
            left={left}
            right={right}
            selectedOption={selectedOption}
            onSelect={(newOption: string) =>
              dispatch({
                type: 'SELECT_OPTION',
                payload: { id, option: newOption }
              })
            }
          />
        );
      })}
      <Button
        classProp="w-80 h-14 text-lg bg-secondary text-white"
        onClick={() => doSomething()}
      >
        확인
      </Button>
    </S.MBTITypesContainer>
  );
};

export default MBTITypes;
