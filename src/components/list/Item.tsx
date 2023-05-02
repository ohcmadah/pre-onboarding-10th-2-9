import { ListItemProps } from '../../@types/list';
import SearchIcon from '../common/SearchIcon';
import * as S from './style';

const Item = ({ searchText, children }: ListItemProps) => {
  const splitter = new RegExp(`(${searchText})`, 'g');
  const texts = children.split(splitter);

  return (
    <S.Item>
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
