import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '@/components/elements/wrapper';

export default function Error({ message }) {
  return (
    <Wrapper>
      <h1>{message}</h1>
    </Wrapper>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
