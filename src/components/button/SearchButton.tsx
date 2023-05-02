import SearchIcon from '../common/SearchIcon';
import * as S from './style';

const SearchButton = () => (
  <S.Button>
    <S.HiddenText>검색버튼</S.HiddenText>
    <S.IconContainer>
      <SearchIcon />
    </S.IconContainer>
  </S.Button>
);

export default SearchButton;
