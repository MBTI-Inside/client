import {
  UseMutationResult,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';

import axiosRequest from '../api';

interface InfoProps {
  method: 'post' | 'put' | 'delete' | 'patch';
  url: string;
  data?: Record<string, unknown>;
  headers?: Record<string, string>;
}

/**
 * 작성자명   : ㅇㅇㅇ
 * 작성일자   : 2023.11.07.(화)
 * 작성내용   : useMutation 커스텀 훅
 * 수정일자   : none
 * 수정내용   : none
 * @param key 내부적으로 데이터를 캐시하고 쿼리에 대한 종속성이 변경될 때 자동으로 다시 가져올 수 있게 하는 고유한 키 값
 * @param info 호출 method와 url 정보, body params를 담은 객체 데이터
 * @returns
 */
const useCustomMutation = <T>(
  key: string[],
  info: InfoProps
): UseMutationResult<T, Error, unknown, unknown> => {
  const queryClient = useQueryClient();

  const mutationFn = () => {
    const { method, url, data, headers } = info;
    return axiosRequest.requestAxios<T>(method, url, data, headers);
  };

  const customMutation = useMutation<T, Error, unknown, unknown>(mutationFn, {
    onSuccess: () => {
      // 새로운 데이터가 서버에 성공적으로 전송되고 새로운 게시물이 추가되었음을 나타내기 위해 사용
      queryClient.invalidateQueries(key);
    }
  });

  return customMutation;
};

export default useCustomMutation;
