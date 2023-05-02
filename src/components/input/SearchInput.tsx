import { SearchInputProps } from '../../@types/input';
import Placeholder from './Placeholder';

import * as S from './style';

const INPUT_ID = 'search_bar_main';

const SearchInput = ({ value, onChange }: SearchInputProps) => (
  <S.InputPadding>
    <S.LabelAndInputContainer>
      <S.Text>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={INPUT_ID}>
          <S.HiddenText>질환명을 검색해주세요.</S.HiddenText>
        </label>
      </S.Text>
      <S.InputContainer>
        {!value && <Placeholder>질환명을 입력해 주세요.</Placeholder>}
        <S.Input type="search" id={INPUT_ID} value={value} onChange={onChange} />
      </S.InputContainer>
    </S.LabelAndInputContainer>
  </S.InputPadding>
);

export default SearchInput;
