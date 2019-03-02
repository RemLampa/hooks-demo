import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import {v4} from 'uuid';

import Item from './components/Item';

const Wrapper = styled.div`
  padding: 5em 5em;
  min-width: 480px;
`;

const TodoData = { 
  id: v4(),
  name: 'foo',
  done: false,
  list: [{
    id: v4(),
    name: 'bar',
    done: false,
    list: [],
  }],
};

class App extends Component {
  state = {
    todos: TodoData,
  };

  render() {
    const { todos } = this.state;

    return (
      <Wrapper className="App">
        <Item 
          id={todos.id} 
          name={todos.name} 
          isRoot
          childList={todos.list}
        />
      </Wrapper>
    );
  }
}

export default App;
