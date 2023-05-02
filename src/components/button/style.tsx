import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const HiddenText = styled.div`
  font-family: inherit;
  overflow: hidden;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

export const IconContainer = styled.div`
  width: 21px;
  height: 21px;
`;
