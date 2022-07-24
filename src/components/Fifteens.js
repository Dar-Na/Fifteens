import React, {useState} from 'react';
import styled from 'styled-components';

import Cell from './Cell';
import {shuffle} from '../helpers';

const StyledFifteens = styled.div`
  margin: 15% auto;
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  width: 20%;
  height: auto;
  font-size: 40px;
  border-style: double;
  border-radius: 5px;
`;

const StyledParentFifteens = styled.div`
  
`;

const WIDTH = 4;

function Fifteens() {
  const [cells, setCells] = useState(shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]));
  
  const handleTryMove = (cellValue) => {
    const indexClick = cells.indexOf(cellValue);
    const indexZero = cells.indexOf(0);
    
    if ((cells[indexClick - WIDTH] === 0) ||
        (!(indexClick % WIDTH === 3) && (cells[indexClick + 1] === 0)) ||
        (cells[indexClick + WIDTH] === 0) ||
        (!!(indexClick % WIDTH) && (cells[indexClick - 1] === 0))) {
      const [...arr] = cells;
      const temp = arr[indexClick];
      arr[indexClick] = arr[indexZero];
      arr[indexZero] = temp;
      setCells(arr);
    }
  }
  
  return (
    <StyledParentFifteens>
      <StyledFifteens>
        {
          cells.map(cell => (
            <Cell
              key={cell}
              handleTryMove={handleTryMove}
            >
              {cell ? cell : null}
            </Cell>
          ))
        }
      </StyledFifteens>
    </StyledParentFifteens>
  );
}

export default Fifteens;