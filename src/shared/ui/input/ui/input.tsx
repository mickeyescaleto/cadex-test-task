'use client';

import type { ComponentProps } from 'react';
import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';

const StyledInput = styled.input`
  background-color: transparent;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid ${({ theme }) => oklch(theme.colors.border)};

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }

  &:focus {
    border: 1px solid ${({ theme }) => oklch(theme.colors.primary, 0.2)};
    outline: 1px solid ${({ theme }) => oklch(theme.colors.primary, 0.2)};
  }
`;

type InputProps = ComponentProps<'input'>;

export function Input({ ...props }: InputProps) {
  return <StyledInput data-slot="input" {...props} />;
}
