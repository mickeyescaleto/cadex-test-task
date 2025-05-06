'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

type CardProps = {
  $width?: string;
  $margin?: string;
};

export const Card = styled.main<CardProps>`
  max-width: ${({ $width }) => $width || 'auto'};
  width: 100%;
  height: auto;
  display: inline-flex;
  flex-direction: column;
  margin: ${({ $margin }) => $margin || '0'};
  padding: 1.5rem 2rem;
  border: 1px solid ${({ theme }) => oklch(theme.colors.border)};
  background-color: ${({ theme }) => oklch(theme.colors.background)};
  color: ${({ theme }) => oklch(theme.colors.text)};
  border-radius: ${({ theme }) => theme.radius.large};
`;
