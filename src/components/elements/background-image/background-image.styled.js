/* eslint-disable import/prefer-default-export */
import Img from 'gatsby-image';
import styled from 'styled-components';

export const StyledImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    object-position: center;
  }
`;
