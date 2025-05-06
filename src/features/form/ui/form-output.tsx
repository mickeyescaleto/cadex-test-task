'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';
import { media } from '@/shared/utilities/media';

export const FormOutput = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${({ theme }) => oklch(theme.colors.text)};

  ${media.small} {
    font-size: 2rem;
  }

  ${media.medium} {
    font-size: 2.5rem;
  }

  ${media.large} {
    font-size: 3.5rem;
  }
`;
