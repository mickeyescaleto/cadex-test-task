'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

export const FormError = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => oklch(theme.colors.error)};
`;
