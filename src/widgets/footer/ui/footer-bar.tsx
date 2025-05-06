'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

export const FooterBar = styled.footer`
  margin-top: auto;
  width: 100%;
  height: auto;
  padding: 4rem 0;
  background-color: ${({ theme }) => oklch(theme.colors.inverse)};
  color: ${({ theme }) => oklch(theme.colors['inverse-text'])};
`;
