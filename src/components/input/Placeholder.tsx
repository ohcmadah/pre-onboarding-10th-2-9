import SearchIcon from '../common/SearchIcon';
import * as S from './style';

const Placeholder = ({ children }: React.PropsWithChildren) => (
  <S.PlaceholderWrapper>
    <S.PlaceholderContainer>
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      <S.Text>{children}</S.Text>
    </S.PlaceholderContainer>
  </S.PlaceholderWrapper>
);

export default Placeholder;
