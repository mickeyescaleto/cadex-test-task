'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

export const NavigationBar = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  background-color: ${({ theme }) => oklch(theme.colors.inverse)};
  color: ${({ theme }) => oklch(theme.colors['inverse-text'])};
  box-shadow: ${({ theme }) => theme.shadow.medium};
`;
