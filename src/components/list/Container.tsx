import * as S from './style';

const Container = ({ children }: React.PropsWithChildren) => (
  <S.ZIndexWrapper>
    <S.Container>
      <S.Description>추천 검색어</S.Description>
      {children}
    </S.Container>
  </S.ZIndexWrapper>
);

export default Container;
