'use client';

import styled from 'styled-components';

import { media } from '@/shared/utilities/media';

export const FeaturesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  text-align: center;

  ${media.medium} {
    font-size: 2.5rem;
  }

  ${media.large} {
    font-size: 3rem;
  }
`;
