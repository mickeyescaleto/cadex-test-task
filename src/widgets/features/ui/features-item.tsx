'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

export const FeaturesItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => oklch(theme.colors['muted'])};
  border-radius: ${({ theme }) => theme.radius.large};
`;

export const FeaturesItemTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const FeaturesItemContent = styled.p`
  color: ${({ theme }) => oklch(theme.colors['muted-text'])};
`;
