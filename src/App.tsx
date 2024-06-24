import routePaths from '@/routers';
import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import ModalProvider from '@/hooks/useModal';

import Button from '@/components/common/Button';
import Loading from '@/components/common/Loading';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

// TODO: ErrorFallback 컴포넌트 구현
const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className=" flex flex-col items-center justify-center px-3 pt-52">
      <section>{error.message}</section>
      <Button onClick={() => resetErrorBoundary()}>reset</Button>
      <section className="mt-4">
        <strong className="text-sky-400">잠시</strong>기다려주세요
      </section>
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
