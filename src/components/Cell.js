import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid;
`;

function Cell({children, handleTryMove}) {
  const handleClick = () => {
    handleTryMove(children)
  }
  
  return (
    <StyledCell onClick={handleClick}>
      {children}
    </StyledCell>
  );
}

export default Cell;