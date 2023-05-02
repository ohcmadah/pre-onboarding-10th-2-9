import { useEffect, useState } from 'react';
import { getRecommendations } from '../api';
import { Recommendation } from '../@types/recommendation';
import debounce from '../utils/debounce';
import SearchButton from '../components/button';
import SearchInput from '../components/input/SearchInput';
import { Item, ListContainer, NoResultsItem } from '../components/list';
import SearchBar from '../components/search';
import * as S from './style';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    if (searchText.trim() === '') return;

    const debounced = debounce(async () => {
      const res = await getRecommendations(searchText);
      if (res.isSuccess) {
        setRecommendations(res.data);
      }
    }, 500);
    debounced();

    // eslint-disable-next-line consistent-return
    return () => debounced.clear();
  }, [searchText]);

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
              {recommendations.length ? (
                recommendations.map(({ id, name }) => (
                  <Item key={id} searchText={searchText}>
                    {name}
                  </Item>
                ))
              ) : (
                <NoResultsItem />
              )}
            </ListContainer>
          )}
        </SearchBar>
      </S.Container>
    </S.Wrapper>
  );
};

export default App;
