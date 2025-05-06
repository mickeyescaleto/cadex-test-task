'use client';

import styled from 'styled-components';

import { oklch } from '@/shared/utilities/oklch';
import { media } from '@/shared/utilities/media';

export const ContactUsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${({ theme }) => oklch(theme.colors.text)};

  ${media.medium} {
    font-size: 2.5rem;
  }

  ${media.large} {
    font-size: 3rem;
  }
`;
