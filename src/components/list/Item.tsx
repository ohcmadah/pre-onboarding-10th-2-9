import { ListItemProps } from '../../@types/list';
import { useSearchBarState } from '../../contexts/SearchBarContext';
import SearchIcon from '../common/SearchIcon';
import * as S from './style';

const Item = ({ isActive, children }: ListItemProps) => {
  const { searchText } = useSearchBarState();
  const splitter = new RegExp(`(${searchText})`, 'g');
  const texts = children.split(splitter);

  return (
    <S.Item isActive={isActive}>
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      {texts.map((text, index) => {
        const key = text + index;
        if (searchText === text) {
          return <S.SameWord key={key}>{text}</S.SameWord>;
        }
        return <S.Text key={key}>{text}</S.Text>;
      })}
    </S.Item>
  );
};

export default Item;
