import routePaths from '@/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import ModalProvider from '@/hooks/useModal';

import Loading from '@/components/common/Loading';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <ModalProvider>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </ModalProvider>
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
