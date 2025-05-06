'use client';

import type { ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

import { oklch } from '@/shared/utilities/oklch';

type StyledButtonProps = {
  $size?: 'small' | 'medium' | 'large';
};

const sizes = ({ $size = 'medium' }: StyledButtonProps) =>
  ({
    small: css`
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
    `,
    medium: css`
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
    `,
    large: css`
      font-size: 1.125rem;
      padding: 1rem 2rem;
    `,
  })[$size];

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme }) => oklch(theme.colors.primary)};
  color: ${({ theme }) => oklch(theme.colors['primary-text'])};
  user-select: none;
  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }

  &:hover {
    background-color: ${({ theme }) => oklch(theme.colors.primary, 0.9)};
  }

  ${({ $size }) => sizes({ $size })}
`;

export type ButtonProps = ComponentProps<'button'> &
  StyledButtonProps & {
    asChild?: boolean;
  };

export function Button({ asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return <StyledButton as={Component} data-slot="button" {...props} />;
}
