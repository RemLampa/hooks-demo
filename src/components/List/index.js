import React from 'react';
import styled from 'styled-components';

import Item from '../Item';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function List({ list, onItemDelete }) {
  return (
    <Wrapper>
      {list.map(item => (
        <Item 
          key={item.id}
          id={item.id}
          done={item.done}
          name={item.name}
          childList={item.list}
          onDelete={onItemDelete}
        />
      ))}
    </Wrapper>
  )
}

export default List;
