import Button from '@/components/common/Button';
import * as S from '@/components/common/Pagination/styles';

const Pagination = () => {
  return (
    <S.PageContainer>
      <Button classProp="join-item btn-md">{'<'}</Button>
      <Button classProp="join-item btn-md">1</Button>
      <Button classProp="join-item btn-md btn-active">2</Button>
      <Button classProp="join-item btn-md">3</Button>
      <Button classProp="join-item btn-md">4</Button>
      <Button classProp="join-item btn-md">5</Button>
      <Button classProp="join-item btn-md">{'>'}</Button>
    </S.PageContainer>
  );
};

export default Pagination;
