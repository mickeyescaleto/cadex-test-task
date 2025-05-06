'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

export const ContactUsView = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 0;
  background-color: ${({ theme }) => oklch(theme.colors.muted)};
  color: ${({ theme }) => oklch(theme.colors['muted-text'])};
`;
