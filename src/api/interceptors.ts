import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

// 인터셉터 정의
const interceptors = (apiInstance: AxiosInstance): AxiosInstance => {
  // 요청 인터셉터
  apiInstance.interceptors.request.use(
    (req: InternalAxiosRequestConfig) => {
      // 요청 데이터가 FormData라면 headers의 Content-Type 수정
      if (req.data instanceof FormData) {
        req.headers['Content-Type'] = 'multipart/form-data';
      }
      // 예: 토큰 추가
      const token = localStorage.getItem('token');
      if (token) {
        req.headers['Authorization'] = `Bearer ${token}`;
      }
      return req;
    },
    (err: AxiosError) => {
      return Promise.reject(err);
    }
  );

  // 응답 인터셉터
  apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },
    (error: AxiosError) => {
      // 공통 에러 처리
      if (error.response) {
        if (error.response.status === 401) {
          // 예: 인증 오류 처리
          console.error('Authentication error, redirecting to login...');
        } else if (error.response.status >= 500) {
          // 예: 서버 오류 처리
          console.error('Server error, please try again later.');
        }
      }
      return Promise.reject(error);
    }
  );
  return apiInstance;
};
export default interceptors;
