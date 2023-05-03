import { useSearchBarState } from '../../contexts/SearchBarContext';
import * as S from './style';

const SearchBar = ({ children }: { children: React.ReactNode }) => {
  const { searchText } = useSearchBarState();
  return (
    <S.Container>
      <S.Bar isFocused={!!searchText}>{children}</S.Bar>
    </S.Container>
  );
};

export default SearchBar;
