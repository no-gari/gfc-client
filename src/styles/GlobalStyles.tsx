import { ReactElement } from 'react';
import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import mainTheme from './theme';

export const setGlobalStyles = css`
  ${emotionNormalize}

  body {
    font-family: Pretendard, sans-serif;
    background-color: ${mainTheme.colors.gray1};
    color: ${mainTheme.colors.black};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  fieldset,
  legend {
    all: unset;
  }

  :disabled {
    cursor: not-allowed;
  }

  * {
    font-family: inherit;
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    word-break: keep-all;
    word-wrap: break-word;

    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none !important;
    }

    -webkit-tap-highlight-color: transparent !important;
    -webkit-touch-callout: none !important;

    user-select: none;
  }
`;

const GlobalStyles = (): ReactElement => {
  return <Global styles={setGlobalStyles} />;
};

export default GlobalStyles;

const whiteBackgroundCss = css`
  body {
    background-color: ${mainTheme.colors.white};
  }
`;

/**
 * 배경색이 흰색인 route에서 사용되는 GlobalStyles 입니다
 */
export const WhiteBackgroundGlobalStyles = () => {
  return <Global styles={whiteBackgroundCss} />;
};
