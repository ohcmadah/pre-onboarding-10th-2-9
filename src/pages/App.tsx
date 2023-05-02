import { useState } from 'react';
import SearchButton from '../components/button';
import SearchInput from '../components/input/SearchInput';
import { Item, ListContainer } from '../components/list';
import SearchBar from '../components/search';
import * as S from './style';

const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </S.Title>

        <SearchBar isFocused={!!searchText}>
          <SearchInput value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <SearchButton />
          {searchText && (
            <ListContainer>
              <Item searchText={searchText}>Test Item</Item>
            </ListContainer>
          )}
        </SearchBar>
      </S.Container>
    </S.Wrapper>
  );
};

export default App;
