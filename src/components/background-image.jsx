import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledImage = styled(Img)`
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

export default function BackgroundImage({ image, alt }) {
  return <StyledImage fluid={image} alt={alt} />;
}
