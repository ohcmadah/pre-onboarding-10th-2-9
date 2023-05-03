import { useSearchBarDispatch, useSearchBarState } from '../../contexts/SearchBarContext';
import { getArrowKey } from '../../utils/keyboard';
import Placeholder from './Placeholder';

import * as S from './style';

const INPUT_ID = 'search_bar_main';

const SearchInput = () => {
  const { searchText } = useSearchBarState();
  const dispatch = useSearchBarDispatch();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'CHANGE_TEXT', payload: { text: e.target.value } });
  };
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.nativeEvent.isComposing) return;
    const key = getArrowKey(e.key);
    if (key) {
      dispatch({ type: 'KEY_DOWN', payload: { key } });
    }
  };

  return (
    <S.InputPadding>
      <S.LabelAndInputContainer>
        <S.Text>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={INPUT_ID}>
            <S.HiddenText>질환명을 검색해주세요.</S.HiddenText>
          </label>
        </S.Text>
        <S.InputContainer>
          {!searchText && <Placeholder>질환명을 입력해 주세요.</Placeholder>}
          <S.Input
            type="search"
            autoComplete="off"
            id={INPUT_ID}
            value={searchText}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </S.InputContainer>
      </S.LabelAndInputContainer>
    </S.InputPadding>
  );
};

export default SearchInput;
