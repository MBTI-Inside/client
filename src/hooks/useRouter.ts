import { useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface RouterProps {
  navigateTo: (path: string, state?: any) => void;
  goBack: () => void;
  params: { [key: string]: string | undefined };
  path: string;
  search: URLSearchParams;
}

const useRouter = (): RouterProps => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const navigateTo = useCallback(
    (path: string, state?: any) => {
      navigate(path, { state });
    },
    [navigate]
  );

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  // URLSearchParams 객체를 생성하여 현재 URL의 쿼리 파라미터를 관리할 수 있도록 합니다.
  const search = new URLSearchParams(location.search);

  return {
    navigateTo,
    goBack,
    params,
    path: location.pathname,
    search
  };
};

export default useRouter;
