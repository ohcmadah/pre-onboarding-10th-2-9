import styled from 'styled-components';
import * as G from '../../style';

export const ZIndexWrapper = styled.div`
  z-index: 1;
`;

export const Container = styled.div`
  border-radius: 20px;
  background-color: white;
  flex-direction: column;
  display: flex;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  padding-top: 24px;
  padding-bottom: 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0 2px 10px;
`;

export const Description = styled.div`
  color: rgb(106, 115, 123);
  font-size: 13px;
  font-weight: 400;
  ${G.textSpacing}
  padding-left: 24px;
  padding-right: 24px;
  font-family: inherit;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  ${G.textSpacing}
  padding: 8px 24px;
  cursor: pointer;
  word-break: break-all;
`;

export const IconContainer = styled.div`
  color: rgb(167, 175, 183);
  align-self: flex-start;
  min-width: 16px;
  height: 16px;
  margin-top: 3px;
  margin-right: 12px;
`;

export const Text = styled.div`
  white-space: break-spaces;
`;

export const SameWord = styled(Text)`
  font-family: inherit;
  font-weight: 700;
`;
