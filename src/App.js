import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {v4} from 'uuid';
import List from './components/List';

const TodoData = [{ 
  id: v4(),
  name: 'foo',
  done: false,
  list: [{
    id: v4(),
    name: 'bar',
    done: false,
    list: [],
  }],
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <List list={TodoData} />
      </div>
    );
  }
}

export default App;
