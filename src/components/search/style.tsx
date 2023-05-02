import styled from 'styled-components';
import { SearchBarProps } from '../../@types/search';
import * as G from '../../style';

export const Container = styled.div`
  display: flex;
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
`;

export const Bar = styled.div<SearchBarProps>`
  border-radius: 42px;
  border: 2px solid;
  border-color: ${({ isFocused }) => (isFocused ? 'rgb(0, 123, 233)' : '#ffffff')};
  background-color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  ${G.textSpacing}
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  position: relative;
  padding-right: 8px;
`;
