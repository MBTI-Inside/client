import { useCustomMutation } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';
import useRouter from '@/hooks/useRouter';

import Button from '@/components/common/Button';
import ColorChip from '@/components/common/ColorChip';
import MBTITypes from '@/components/common/MBTITypes';
import * as S from '@/components/pages/Memo/Note/styles';

const Note = (params: any) => {
  const { id, title, content, password } = params;
  const { navigateTo } = useRouter();
  const { openModal, closeModal } = useModalContext();
  // openModal(<MBTITypes />, null, 'MBTI 선택')
  const titleRef = useRef(title);
  const contentRef = useRef(content);
  const passwordRef = useRef(password);
  const [mbtiType, setMbtiType] = useState('ESTJ');
  const [colorType, setColorType] = useState('bg-[#FFDE3F]');

  const [info, setInfo] = useState({
    method: id ? 'patch' : 'post',
    url: id ? `/memos/${id}` : '/memos',
    data: { title: '', content: '' }
  });

  const { mutate } = useCustomMutation(['get-memos'], {
    method: info.method as 'patch' | 'post'
  });

  // 제출 버튼 클릭 시 실행될 함수
  const handleSubmit = () => {
    // TODO: 유효성 검사 체크 필요
    mutate(
      {
        url: info.url, // 동적 URL
        data: {
          title: titleRef.current.value,
          content: contentRef.current.value,
          password: passwordRef.current.value,
          mbtiType,
          cardColor: colorType
        }
      },
      {
        onSuccess: (data) => {
          closeModal(data);
        },
        onError: (error) => {
          throw error;
        }
      }
    );
  };

  return (
    <S.NoteFormContainer>
      <S.InputTitle
        type="text"
        placeholder="제목을 입력하세요."
        defaultValue={titleRef.current}
        ref={titleRef}
      />
      {/* TODO: 글자수 입력 제한 */}
      <S.InputContent
        placeholder="내용을 입력하세요."
        defaultValue={contentRef.current}
        ref={contentRef}
      />
      <S.InputTitle
        type="password"
        placeholder="메모 비밀번호를 입력하세요."
        ref={passwordRef}
      />
      <Button
        classProp="w-full h-14 text-lg text-white bg-accent"
        onClick={() => {
          openModal(<MBTITypes mbtiType={mbtiType} />, null, 'MBTI 선택').then(
            (result) => setMbtiType(result)
          );
        }}
      >
        <span>{mbtiType}</span>
        <FaExchangeAlt />
      </Button>
      <Button
        classProp="w-full h-14 text-lg text-white bg-primary"
        onClick={() => {
          openModal(
            <ColorChip colorType={colorType} />,
            null,
            '배경색상 선택'
          ).then((result) => setColorType(result));
        }}
      >
        <span>배경 색상</span>
        <S.MemoColor bg={colorType} />
      </Button>
      <Button
        classProp="w-full h-14 text-lg text-white bg-secondary"
        onClick={() => handleSubmit()}
      >
        작성 완료
      </Button>
    </S.NoteFormContainer>
  );
};

export default Note;
