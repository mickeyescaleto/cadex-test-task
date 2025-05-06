'use client';

import styled from 'styled-components';

import { media } from '@/shared/utilities/media';

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;

  ${media.small} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.large} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
