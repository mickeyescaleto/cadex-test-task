'use client';

import { createGlobalStyle, css } from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';
import { media } from '@/shared/utilities/media';

const styles = css`
  html {
    font-size: 16px;

    ${media.large} {
      font-size: ${({ theme: { variables } }) =>
        `calc(${variables.size} / ${variables.width} * 100vw)`};
    }
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    overflow-x: hidden;
    background-color: ${({ theme }) => oklch(theme.colors.background)};
    color: ${({ theme }) => oklch(theme.colors.text)};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${styles}
`;
