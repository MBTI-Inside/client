import { mbtiOptions } from '@/constants';
import { useReducer } from 'react';

import { useModalContext } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import * as S from '@/components/common/MBTITypes/styles';
import Toggle from '@/components/common/Toggle';

interface ToggleState {
  [key: string]: string;
}

interface Action {
  type: string;
  payload: {
    id: string;
    option: string;
  };
}

const initialState: ToggleState = {
  energy: 'E',
  awareness: 'S',
  judgement: 'T',
  life: 'J'
};

const reducer = (state: ToggleState, action: Action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, [action.payload.id]: action.payload.option };
    default:
      return state;
  }
};

const MBTITypes = () => {
  const { closeModal } = useModalContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const doSomething = () => {
    // Do something with state
    console.log(state);
    closeModal(state);
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
