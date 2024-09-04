import routePaths from '@/routers';
import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import ModalProvider from '@/hooks/useModal';
import useRouter from '@/hooks/useRouter';

import Button from '@/components/common/Button';
import Loading from '@/components/common/Loading';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

// TODO: ErrorFallback 컴포넌트 구현
const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { navigateTo } = useRouter();
  return (
    <div className="card bg-base-100 w-5/6 shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="card-body justify-center items-center gap-2">
        <h2 className="card-title">{error.message}</h2>
        <p>오류가 발생하였습니다.</p>
        <p>다시 시도해 주세요.</p>
        <div className="card-actions justify-end">
          <Button
            classProp="btn-primary"
            onClick={() => {
              resetErrorBoundary();
              navigateTo('/');
            }}
          >
            메인 페이지 가기
          </Button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <ModalProvider>
              <Header />
              <ContentWrapper>
                <Routes>
                  {routePaths.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </ContentWrapper>
              <Footer />
            </ModalProvider>
          </Suspense>
        </ErrorBoundary>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;

const AppWrapper = tw.div`
  flex 
  flex-col 
  min-h-screen
  bg-black
`;

const ContentWrapper = tw.div`
  flex-1 
  overflow-y-auto
  flex
  flex-col
  items-center
`;
