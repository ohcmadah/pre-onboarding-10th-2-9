import styled, { css } from 'styled-components';
import * as G from '../../style';

const horizontalFlexBox = css`
  display: flex;
  flex-direction: row;
`;

export const InputPadding = styled.div`
  flex: 1;
  font-size: 1.125rem;
  ${G.textSpacing}
  ${horizontalFlexBox}
  align-items: center;
  padding: 20px 10px 20px 24px;
  font-weight: 400;
`;

export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.div`
  font-family: inherit;
`;

export const HiddenText = styled.div`
  opacity: 0;
  font-family: inherit;
  line-height: 7px;
`;

export const InputContainer = styled.div`
  ${horizontalFlexBox}
  align-items: center;
  position: relative;
`;

export const PlaceholderWrapper = styled.div`
  color: #a7afb7;
  position: absolute;
  pointer-events: none;
`;

export const PlaceholderContainer = styled.div`
  ${horizontalFlexBox}
`;

export const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

export const Input = styled.input`
  padding-right: 25px;
  width: 100%;
  border: 0;
  background-color: transparent;
  min-width: 0;
  flex: 1;
  outline-offset: -2px;

  :focus {
    outline: none;
  }
`;
