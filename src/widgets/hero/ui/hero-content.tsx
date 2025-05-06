'use client';

import styled from 'styled-components';

import { media } from '@/shared/utilities/media';

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 6rem;
  row-gap: 2rem;

  ${media.large} {
    flex-direction: row;
  }
`;
