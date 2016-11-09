import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Week from './Week.js';
// import Blurb from './Blurb.js';
// import Resources from './Resources.js';
import EventPractice from './EventPractice.js';

class App extends Component {
  constructor() {
    super()
    this.state = {

    	test: 'It works!!!',
      label1: 'Week 1: ES6',
      sum1: { summary: 'Internet was down all week, but we started JS Assessments.'},
      week1: [
        { title: 'JS Assessment', link: 'https://github.com/rmurphey/js-assessment' },
        { title: 'DevDocs–Offline', link: 'https://devdocs.io/offline' },
        { title: 'var, let, and const', link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8' },
        { title: 'Arrow Functions in JavaScript–What, Why and How', link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I' },
        
      ],
      label2: 'Week 2: ES6 Continued',
      sum2: { summary: 'Continued JS Assessments and talked about how to get a job as a junior dev.' },
      week2: [
        { title: 'Essential ES6', link: 'https://www.youtube.com/watch?v=CozSF5abcTA' },
        { title: 'Javascript ES6 Cheatsheet–the best of JS ES6', link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4' },
        { title: 'Javascript ES6 Cheatsheet #2', link: 'https://www.youtube.com/watch?v=LmL0Gh193M0' },
      ],
      label3: 'Week 3: Intro to React',
      sum3: { summary: 'Jumped right into React and started building components. Andrew was sick all week, so Derek stepped in.' },
      week3: [
        { title: 'Thinking in React', link: 'https://facebook.github.io/react/docs/thinking-in-react.html' },

      ],
      label4: 'Week 4: Passing Data with State and Props',
      sum4: { summary: 'Andrew roused himself from his sickness to help us review state, props, components, and events.'},
      week4: [
        { title: 'Handling Events', link: 'https://facebook.github.io/react/docs/handling-events.html' },
      ],
      label5: 'Week 5: Forms and Controlled and Uncontrolled Inputs',
      sum5: { summary: 'Started learning how to implement forms.' },
      week5: [
        { title: 'React for Everyone #13: Controlled Inputs', link: 'https://www.youtube.com/watch?v=BvtQMxekmH0' },
        { title: 'Forms–React', link: 'https://facebook.github.io/react/docs/forms.html' },

      ],
    }
    // For implementing the onClick interactivity: make sure to call setState in the 
    // child component. 
    // You need to bind in the parent component in order to be able to pass a state change implemented in a child
    // component up to the parent component.
    console.log(this);
    this.response = this.response.bind(this);
  }

  response(event) {
  	event.preventDefault();
		this.setState( {test: 'Event Pass Successful!'} );
	}

  // newResource(resource) {
  //   const resources = {...this.state.resources};
  //   this.setState({resources});
  // // 'resources' is a hypothetical property in the state that holds a list of resources.
  // // Right now, what I have are separate resource properties for each week. Maybe I can 
  // // combine them into one object under the key 'resources'?
  // }

  render() {
    return (
      <div className='App'>

        <Header header='Basic React App' />

      	<p>{this.state.test}</p>
        { /* The text that I want to change when a user clicks the button below. */ }

        <EventPractice tagline={this.response} />
        { /* The button that changes the text above when clicked. */ }

        <Week label={this.state.label1} overview={this.state.sum1} links={this.state.week1} />                                                                   
        { /* forIn is the method for iterating over an object */ } 

        <Week label={this.state.label2} overview={this.state.sum2} links={this.state.week2} />  

        <Week label={this.state.label3} overview={this.state.sum3} links={this.state.week3} /> 

        <Week label={this.state.label4} overview={this.state.sum4} links={this.state.week4} /> 

        <Week label={this.state.label5} overview={this.state.sum5} links={this.state.week5} /> 


        { /*       
        <input type='text' value={this.state.another} /> 

        
        <h2>Week</h2>
        <Blurb overview={this.state.sum1} />
        <Resources links={this.state.week1} />

        <h2>Week</h2>
        <Blurb overview={this.state.sum2} />
        <Resources links={this.state.week2} />

        <h2>Week</h2>
        <Blurb overview={this.state.sum3} />
        <Resources links={this.state.week3} />

        <h2>Week</h2>
        <Blurb overview={this.state.sum4} />
        <Resources links={this.state.week4} />
        */ }

      </div>
    );
  }
}

// function Header(props) {
//   return (
//     <h1>{props.header}</h1>
//   );
// }



// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.banner}</h1>
//       </div>
//     );
//   }
// }


// class Blurb extends Component {

//   render() {
//     // const para = this.props.overview.map((item, idx) => {
//     //   return <p key={idx}>{item.summary}</p> 
//     // });
//     // ^Remnant from when I had the summary of the week as part
//     // of the week(n) array in the parent state.
//     const para = this.props.overview.summary;
//     return (
//       <p className='App'>{para}</p>
//     );
//   }
// }

// class Resources extends Component {

//   render() {
//     const material = this.props.links.map((item, idx) => {
//       return <li key={idx}><a href={item.link}>{item.title}</a></li>;
//     });
//     return (
//       <ul className='App'>{material}</ul>
//     );
//   }
// }

// class AddResource extends Component {
// 	// button to add link

// 	// CURRENTLY JUST A CONSOLE.LOG FOR EVENT HANDLING PRACTICE PURPOSES
// 	// clickEvent = (event) => {
// 	// 	event.preventDefault();
// 	// 	console.log('Event Pass Successful!');
// 	// }

// 	render() {
// 		return (
// 				<button onClick={this.props.tagline}>Change the Text</button>
// 		);
// 	}
// }


export default App;
