import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import * as Icons from 'react-icons/si';
import PropTypes from 'prop-types';

import { StyledItem } from './icon-list-item.styled';

export default function IconListItem({ name, description, icon, link }) {
  const [isHovering, setIsHovering] = useState(false);
  const TagName = Icons[icon];

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <StyledItem onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <a href={link} rel="noopener nofollow noreferrer">
        {isHovering ? <FiExternalLink /> : <TagName />}
        <strong>{name}</strong>
      </a>
      <span>{description}</span>
    </StyledItem>
  );
}

IconListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.shape({}).isRequired,
  link: PropTypes.string.isRequired,
};
