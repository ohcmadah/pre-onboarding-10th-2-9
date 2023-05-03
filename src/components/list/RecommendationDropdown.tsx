import { useSearchBarState } from '../../contexts/SearchBarContext';
import Item from './Item';
import NoResultsItem from './NoResultsItem';
import * as S from './style';

const RecommendationDropdown = () => {
  const { searchText, recommendations, activeIndex } = useSearchBarState();

  if (!searchText) {
    return null;
  }

  return (
    <S.ZIndexWrapper>
      <S.Container>
        <S.Description>추천 검색어</S.Description>
        {recommendations.length ? (
          recommendations.map(({ id, name }, index) => {
            const isActive = activeIndex === index;
            return (
              <Item key={id} isActive={isActive}>
                {name}
              </Item>
            );
          })
        ) : (
          <NoResultsItem />
        )}
      </S.Container>
    </S.ZIndexWrapper>
  );
};

export default RecommendationDropdown;
