'use client';

import type { ComponentProps } from 'react';
import styled from 'styled-components';
import * as LabelPrimitive from '@radix-ui/react-label';

const StyledLabel = styled(LabelPrimitive.Root)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  user-select: none;
  font-size: 0.875rem;
`;

type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

export function Label({ ...props }: LabelProps) {
  return <StyledLabel data-slot="label" {...props} />;
}
