import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Memo = lazy(() => import('@/pages/Memo'));
const Login = lazy(() => import('@/pages/Login'));
const Test = lazy(() => import('@/pages/Test'));
const TestResult = lazy(() => import('@/pages/Test/Result'));
const MemoView = lazy(() => import('@/pages/Memo/View'));
const Stats = lazy(() => import('@/pages/Stats'));
const Admin = lazy(() => import('@/pages/Admin'));
const QuestionView = lazy(() => import('@/pages/Question/View'));
const AdminUserList = lazy(() => import('@/pages/User'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const MyTest = lazy(() => import('@/pages/MyPage/TestList'));
const MyMemo = lazy(() => import('@/pages/MyPage/PostList'));
const Question = lazy(() => import('@/pages/Question'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routePaths = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/result/:mbti',
    element: <TestResult />
  },
  {
    path: '/memo',
    element: <Memo />
  },
  {
    path: '/memo-view/:id',
    element: <MemoView />
  },
  {
    path: '/stats',
    element: <Stats />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/question/:id',
    element: <QuestionView />
  },
  {
    path: '/admin/user-list',
    element: <AdminUserList />
  },
  {
    path: '/mypage',
    element: <MyPage />
  },
  {
    path: '/mypage/test-list',
    element: <MyTest />
  },
  {
    path: '/mypage/memo-list',
    element: <MyMemo />
  },
  {
    path: '/question',
    element: <Question />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routePaths;
