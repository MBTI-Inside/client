import axiosRequest from '@/api';
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery
} from '@tanstack/react-query';

interface QueryData<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null; // Todo: error-boundary
}

interface InfoProps {
  method: 'get';
  url: string;
  enabled: boolean;
}

/**
 * 작성자명   : 원종석
 * 작성일자   : 2023.11.06.(월)
 * 작성내용   : useQuery 커스텀 훅
 * 수정일자   : 2024.07.08 (월)
 * 수정내용   : none
 * @param key 내부적으로 데이터를 캐시하고 쿼리에 대한 종속성이 변경될 때 자동으로 다시 가져올 수 있게 하는 고유한 키 값
 * @param info 호출 method와 url 정보를 담은 객체 데이터
 * @returns
 */
const useCustomQuery = <T>(key: string[], info: InfoProps): QueryData<T> => {
  const { method, url, enabled = true } = info;

  const queryFn = () => axiosRequest.requestAxios<T>(method, url);

  const queryOptions: UseQueryOptions<T, Error> = {
    queryKey: key,
    queryFn,
    enabled
  };

  const { data, isLoading, isError, error }: UseQueryResult<T, Error> =
    useQuery(queryOptions);

  return { data, isLoading, isError, error };
};

export default useCustomQuery;
