'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

export type StyledIconProps = {
  $width?: string;
};

export const StyledIcon = styled.svg.attrs({
  width: '100',
  height: '80',
  viewBox: '0 0 100 80',
  xmlns: 'http://www.w3.org/2000/svg',
})<StyledIconProps>`
  width: ${({ $width }) => $width || '3rem'};
  height: auto;

  path:nth-child(1) {
    fill: ${({ theme }) => oklch(theme.colors['primary-text'])};
  }

  path:nth-child(2) {
    fill: ${({ theme }) => oklch(theme.colors.primary)};
  }

  path:nth-child(3) {
    fill: ${({ theme }) => oklch(theme.colors['primary-text'])};
  }
`;
