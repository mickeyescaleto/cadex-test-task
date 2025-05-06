'use client';

import styled from 'styled-components';

import { media } from '@/shared/utilities/media';

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;

  ${media.large} {
    font-size: 1.25rem;
    text-align: start;
  }
`;
