import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      header: 'Basic React App',
      week1: [
        { activity: 'Internet was down all week' },
        { activity: 'Started JS Assessments'},
      ],
      week2: [
        { activity: 'Continued JS Assessments' }, 
        { activity: 'How To Get a Job As a Junior Dev Talk' },
      ],
      week3: [
        { activity: 'Started building components' },
      ],
    }
  }
  render() {
    return (
      <div className='App'>
        <div>
          <Header banner={this.state.header} />
        </div>

        <div>
          <h2>ES6</h2>
            <Week agenda={this.state.week1} />
        </div>
        <div>
          <h2>ES6 Continued</h2>
            <Week agenda={this.state.week2} />
         </div> 
         <div>
          <h2>Intro to React</h2>
            <Week agenda={this.state.week3} />
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.banner}</h1>
      </div>
    );
  }
}

class Week extends Component {
  render() {
    const bullets = this.props.agenda.map((item) => <li>{item.activity}</li> );
    return (
      <ul className='App'>{bullets}</ul>
    );
  }
}




export default App;
