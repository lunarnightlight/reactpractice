import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      header: 'Basic React App',
      week1: [
        { summary: 'Internet was down all week, but we started JS Assessments.'},

        { title: 'JS Assessment', link: 'https://github.com/rmurphey/js-assessment' },
        { title: 'DevDocs–Offline', link: 'https://devdocs.io/offline' },
        { title: 'var, let, and const', link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8' },
        { title: 'Arrow Functions in JavaScript–What, Why and How', link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I' },
        
      ],
      week2: [
        { summary: 'Continued JS Assessments and talked about how to get a job as a junior dev.' },

        { title: 'Essential ES6', link: 'https://www.youtube.com/watch?v=CozSF5abcTA' },
        { title: 'Javascript ES6 Cheatsheet–the best of JS ES6', link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4' },
        { title: 'Javascript ES6 Cheatsheet #2', link: 'https://www.youtube.com/watch?v=LmL0Gh193M0' },
      ],
      week3: [
        { summary: 'Started building components' },

        { title: 'Thinking in React', link: 'https://facebook.github.io/react/docs/thinking-in-react.html' },

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
            <Week overview={this.state.week1} />
            <Resources links={this.state.week1} />
        </div>

        <div>
          <h2>ES6 Continued</h2>
            <Week overview={this.state.week2} />
            <Resources links={this.state.week2} />
        </div> 

         <div>
          <h2>Intro to React</h2>
            <Week overview={this.state.week3} />
            <Resources links={this.state.week3} />
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
    const blurb = this.props.overview.map((item, idx) => {
      return <p key={idx}>{item.summary}</p> 
    });
    return (
      <div className='App'>{blurb}</div>
    );
  }
}

class Resources extends Component {

  render() {
    const material = this.props.links.map((item, idx) => {
      return <li key={idx}><a href={item.link}>{item.title}</a></li>;
    });
    return (
      <ul className='App'>{material}</ul>
    );
  }
}


export default App;
