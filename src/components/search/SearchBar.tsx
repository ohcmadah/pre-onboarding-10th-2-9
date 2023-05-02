import { SearchBarProps } from '../../@types/search';
import * as S from './style';

const SearchBar = ({ isFocused, children }: React.PropsWithChildren<SearchBarProps>) => (
  <S.Container>
    <S.Bar isFocused={isFocused}>{children}</S.Bar>
  </S.Container>
);

export default SearchBar;
