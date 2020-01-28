import React from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gray-700);
  width: var(--space-48);
  height: var(--space-48);
  font-size: var(--text-24);
  color: var(--white);

  &:hover {
    background-color: var(--gray-800);
    border: 1px solid var(--gray-100);
  }
`;

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
