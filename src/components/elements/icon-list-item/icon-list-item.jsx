import React from 'react';
import * as Icons from 'react-icons/si';
import PropTypes from 'prop-types';

import { StyledItem } from './icon-list-item.styled';

export default function IconListItem({ name, description, icon, link }) {
  const TagName = Icons[icon];

  return (
    <StyledItem>
      <a href={link} rel="noopener nofollow noreferrer">
        <TagName />
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
