import { ReactNode, createContext, useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';

import Button from '@/components/common/Button';
import Portal from '@/components/common/Portal';

interface ModalProps {
  component: ReactNode; // 모달에 표시할 React 구성 요소
  parameter: any; // 모달에 전달할 매개변수
  opened: boolean; // 모달이 열려 있는지 여부
  title: string; // 모달 창의 제목
  onClose: (callback?: any) => void; // 모달이 닫힐 때 실행할 콜백 함수
}

interface ModalContextProps {
  openModal: (
    component: React.ReactNode,
    parameter: any,
    title: string
  ) => Promise<any>;
  closeModal: (callback: any) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [modalStack, setModalStack] = useState<ModalProps[]>([]);

  const openModal = (
    component: ReactNode,
    parameter: any,
    title: string
  ): Promise<any> => {
    return new Promise((resolve) => {
      const modalProps = {
        component,
        parameter,
        onClose: resolve, // 모달이 닫힐 때 resolve 호출
        title,
        opened: true
      };
      setModalStack((prevStack) => [...prevStack, modalProps]);
    });
  };

  const closeModal = (result?: any) => {
    setModalStack((prevStack) => {
      const currentModal = prevStack[prevStack.length - 1];
      if (currentModal) {
        currentModal.onClose(result); // Promise resolve 호출
      }
      return prevStack.slice(0, -1);
    });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Portal>
        {modalStack.map((modalProps, index) => {
          /**
           * 사용 예시 onClick={() => openModal(<Component />, null, 'Title')}
           */
          // TODO: 바깥 쪽 영역 클릭 시 모달 닫기
          // TODO: 타이틀 옆에 x표 눌러서 모달 닫기
          return (
            <section
              key={index}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              <div
                className="overflow-y-auto overscroll-contain p-6 bg-black w-full h-full flex flex-col gap-4"
                // className="p-6"
                key={index}
                style={
                  {
                    // transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
                    // --tw-bg-opacity: 1;
                    // background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
                    // padding: 1.5rem;
                    // transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
                    // transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
                    // transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
                    // transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    // transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    // transition-duration: 200ms;
                    // box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
                    // overflow-y: auto;
                    // overscroll-behavior: contain;
                  }
                }
              >
                <h3 className="flex justify-between font-bold text-lg text-white">
                  <span>{modalProps.title}</span>
                  <Button
                    classProp="btn btn-sm btn-circle btn-ghost text-white text-xl"
                    onClick={closeModal}
                  >
                    <MdClose />
                  </Button>
                </h3>
                {modalProps.component}
              </div>
            </section>
          );
        })}
      </Portal>
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('useModalContext must be used within a useModal');
  }
  return modalContext;
};

export default ModalProvider;
