'use client';

import { media } from '@/shared/utilities/media';
import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  html {
    font-size: 16px;

    ${media.large} {
      font-size: ${({ theme: { variables } }) =>
        `calc(${variables.size} / ${variables.width} * 100vw)`};
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${styles}
`;
