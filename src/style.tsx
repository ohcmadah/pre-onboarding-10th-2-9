import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    font-family: 'Spoqa Han Sans Neo', -apple-system, 'BlinkMacSystemFont', 'Apple SD Gothic Neo',
      'Inter', 'Segoe UI', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  body {
    margin: 0;
  }
`;

export const textSpacing = css`
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

export default GlobalStyle;
