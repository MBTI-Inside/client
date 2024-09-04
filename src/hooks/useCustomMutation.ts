import axiosRequest from '@/api';
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';

interface InfoProps {
  method: 'post' | 'put' | 'delete' | 'patch';
  url: string;
  data?: Record<string, unknown>;
  headers?: Record<string, string>;
}

/**
 * 작성자명   : 원종석
 * 작성일자   : 2023.11.07.(화)
 * 작성내용   : useMutation 커스텀 훅
 * 수정일자   : 2024.09.04 (수)
 * 수정내용   : 범용적으로 사용할 수 있도록 로직 수정
 * @param key 내부적으로 데이터를 캐시하고 쿼리에 대한 종속성이 변경될 때 자동으로 다시 가져올 수 있게 하는 고유한 키 값
 * @param info 호출 method와 url 정보, body params를 담은 객체 데이터
 * @param options mutation 훅에 전달되는 추가적인 옵션 (onSuccess, onError 등)
 * @returns
 */
const useCustomMutation = <T>(
  key: string[],
  info: InfoProps,
  options?: UseMutationOptions<T, Error, unknown, unknown> // 추가 옵션을 허용
): UseMutationResult<T, Error, unknown, unknown> => {
  const queryClient = useQueryClient();

  const mutationFn = (variables: unknown) => {
    const { method, url, data, headers } = info;
    // variables가 있는 경우 data를 재정의할 수 있게 처리
    return axiosRequest.requestAxios<T>(
      method,
      url,
      variables || data,
      headers
    );
  };

  const customMutation = useMutation<T, Error, unknown, unknown>(mutationFn, {
    // 사용자 정의 onSuccess 처리, 기본적으로는 캐시 무효화
    onSuccess: (data, variables, context) => {
      // queryClient.invalidateQueries를 실행하여 관련된 쿼리를 무효화함
      queryClient.invalidateQueries(key);

      // 사용자 옵션에 onSuccess가 있다면, 해당 함수 호출
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context); // 필수 인자 전달
      }
    },
    onError: (error, variables, context) => {
      // 사용자 옵션에 onError가 있다면 실행
      if (options?.onError) {
        options.onError(error, variables, context); // 필수 인자 전달
      }
    },
    ...options // 나머지 옵션들을 확장할 수 있도록 설정
  });

  return customMutation;
};

export default useCustomMutation;
