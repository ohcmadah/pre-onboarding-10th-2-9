import { SearchBarContextProvider } from '../contexts/SearchBarContext';
import SearchButton from '../components/button';
import SearchInput from '../components/input/SearchInput';
import SearchBar from '../components/search';
import RecommendationDropdown from '../components/list';
import * as S from './style';

const Search = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </S.Title>

        <SearchBarContextProvider>
          <SearchBar>
            <SearchInput />
            <SearchButton />
            <RecommendationDropdown />
          </SearchBar>
        </SearchBarContextProvider>
      </S.Container>
    </S.Wrapper>
  );
};

export default Search;
