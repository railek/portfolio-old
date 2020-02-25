import React from 'react';
import PropTypes from 'prop-types';

import { StyledImage } from './background-image.styled';

export default function BackgroundImage({ image, alt }) {
  return <StyledImage fluid={image} alt={alt} />;
}

BackgroundImage.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
  alt: PropTypes.string.isRequired,
};
