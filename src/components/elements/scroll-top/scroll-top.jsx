import React from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';

import { StyledButton } from './scroll-top.styled';

const ScrollTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledButton onClick={handleClick} type="button">
      <IoIosArrowRoundUp />
    </StyledButton>
  );
};

export default ScrollTop;
