import React from 'react';
import Potato from './Potato';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('hello 무조건 먼저 실행됨');
  }

  state = {
    count : 0,
  };
  add = () =>{
    console.log("add");
    // this.state.count = 1;
    // this.setState({count: this.state.count +1});
    this.setState(current => ({
      count: this.state.count +1,
    }));
  }
  minus = ()=>{
    console.log("minus");
    // this.state.count = -1;
    // this.setState({count: this.state.count -1});
    this.setState(current =>({
      count: this.state.count -1,
    }));
  }


  render(){
    console.log('render');
    return (
    <div>
    <h1>Component</h1>
    <p>state: 동적인 데이터를 다룰 때 사용하는 것</p>
    <p>This number is: {this.state.count}</p>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    
    <p>props: 생성자 함수</p>

    </div>
    )
  }
}

export default App;
