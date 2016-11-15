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
        { title: 'How it feels to learn JavaScript in 2016', link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.tej6vdlvf' },
        { title: 'JS Assessment', link: 'https://github.com/rmurphey/js-assessment' },
        { title: 'DevDocs–Offline', link: 'https://devdocs.io/offline' },
        { title: 'Higher-order functions - Part 1 of Functional Programming in JavaScript', link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk' },
        { title: 'Map - Part 2 of Functional Programming in JavaScript', link: 'https://www.youtube.com/watch?v=bCqtb-Z5YGQ' },
        { title: 'Reduce basics - Part 3 of Functional Programming in JavaScript', link: 'https://www.youtube.com/watch?v=Wl98eZpkp-c' },
        { title: 'Reduce Advanced - Part 4 of Functional Programming in JavaScript', link: 'https://www.youtube.com/watch?v=1DMolJ2FrNY' },
        { title: 'var, let, and const', link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8' },
        { title: 'Arrow Functions in JavaScript–What, Why and How', link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I' },
        { title: 'DC Is the Top City for Women in Tech', link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02' },
        { title: 'RailsConf 2016 - Surviving the Framework Hype Cycle by Brandon Hayes', link: 'https://www.youtube.com/watch?v=O6TtfK9gGvA' },
        { title: 'Learn The Entire JavaScript Language in a Single Image', link: 'http://www.techworm.net/2016/10/learn-entire-javascript-language-single-image.html#prettyPhoto' },
        { title: 'JavaScript ES6+: var, let, or const?', link: 'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.nceuq0r4u' },
        { title: 'JavaScript: Understanding the Weird Parts', link: 'https://www.udemy.com/understand-javascript/learn/v4/overview' },
          
      ],
      label2: 'Week 2: ES6 Continued',
      sum2: { summary: 'Continued JS Assessments and talked about how to get a job as a junior dev.' },
      week2: [
        { title: 'ECMAScript 6 – New Features: Overview & Comparison', link: 'http://es6-features.org/#Constants' },
        { title: 'Essential ES6 / ES2015 JavaScript', link: 'https://www.youtube.com/watch?v=CozSF5abcTA' },
        { title: 'Javascript ES6 Cheatsheet–the best of JS ES6', link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4' },
        { title: 'Javascript ES6 Cheatsheet #2', link: 'https://www.youtube.com/watch?v=LmL0Gh193M0' },
        { title: 'ECMAScript 6 / ES6 New Features - Tutorial 1 - Let ', link: 'https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt' },
        { title: 'ES6 Interactive Guide', link: 'http://stack.formidable.com/es6-interactive-guide/#/' },
        { title: 'Forget the Click Bait. Here’s What the JavaScript Job Market Really Looks Like in 2016.', link: 'https://medium.com/javascript-scene/forget-the-click-bait-here-s-what-the-javascript-job-market-really-looks-like-in-2016-ddfe0d39b467#.i9oll2fb9' },
        { title: 'ES6 Sandbox', link: 'http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/' },
        { title: 'Airbnb JavaScript Style Guide', link: 'https://github.com/airbnb/javascript' },
        { title: 'Egghead: Learn ES6 (ECMAScript 2015)', link: 'https://egghead.io/courses/learn-es6-ecmascript-2015' },
        { title: 'Junior Developer Contract Rate', link: 'https://groups.google.com/forum/#!topic/pdxruby/GfmtqzI9YqA' },
        { title: 'Four Semesters of Computer Science in 5 Hours', link: 'https://frontendmasters.com/courses/computer-science/' },
        { title: 'How to Save the Princess in 8 Programming Languages', link: 'https://toggl.com/programming-princess' },
        { title: 'Git Magic', link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/' },
        { title: 'Don\'t use Array.forEach, use for() instead', link: 'https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead' },
        { title: 'Sublime Text Power User', link: 'https://sublimetextbook.com/' },
        { title: 'Atom Keyboard Shortcuts', link: 'https://github.com/nwinkler/atom-keyboard-shortcuts' },

      ],
      label3: 'Week 3: Intro to React',
      sum3: { summary: 'Jumped right into React and started building components. Andrew was sick all week, so Derek stepped in.' },
      week3: [
        { title: 'Thinking in React', link: 'https://facebook.github.io/react/docs/thinking-in-react.html' },
        { title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering', link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be' },
        { title: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components', link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ' },
        { title: 'REACT JS TUTORIAL #4 - State vs Props & Application Data', link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw' },
        { title: 'React on ES6+', link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus' },
        { title: 'Learning How to Learn: Powerful mental tools to help you master tough subjects', link: 'https://www.coursera.org/learn/learning-how-to-learn' },
        { title: 'Learn ES2015', link: 'https://babeljs.io/docs/learn-es2015/' },
        { title: 'Our First 50,000 Stars', link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html' },
        { title: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe', link: 'https://www.youtube.com/watch?v=DN4yLZB1vUQ&feature=youtu.be' },
        { title: 'babel-sublime syntax highlighter', link: 'https://github.com/babel/babel-sublime' },
        { title: 'Essential JavaScript Links', link: 'https://github.com/ericelliott/essential-javascript-links' },
        { title: 'Understanding JavaScript’s Function.prototype.bind', link: 'https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/' },
        { title: '', link: '' },        
      ],
      label4: 'Week 4: Passing Data with State and Props',
      sum4: { summary: 'Andrew roused himself from his sickness to help us review state, props, components, and events.'},
      week4: [
        { title: 'Handling Events', link: 'https://facebook.github.io/react/docs/handling-events.html' },
        { title: 'React Stateless Functional Components: Nine Wins You Might Have Overlooked', link: 'https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.m6ywobx4b' },
        { title: 'ReactJS Basics - #7 Events & ReactJS', link: 'https://www.youtube.com/watch?v=OcM__8q6p4c&index=8' },
        { title: 'ReactJS Basics - #8 State of Components', link: 'https://www.youtube.com/watch?v=e5n9j9n83OM' },
        { title: 'ReactJS Basics - #9 How does ReactJS update the DOM?', link: 'https://www.youtube.com/watch?v=Iw2BLUjQo1E' },
        { title: 'ReactJS Basics - #10 Stateless Components', link: 'https://www.youtube.com/watch?v=SEkfzqIgvTo' },
        { title: 'React for Beginners', link: 'https://reactforbeginners.com/' },
        { title: 'Top 5 Tutorials for Getting Started with React', link: 'http://andrewhfarmer.com/getting-started-tutorials/' },
        { title: 'React Top-Level API', link: 'https://facebook.github.io/react/docs/react-api.html#createelement' },
        { title: '8 no-Flux Strategies for React component communication', link: 'http://andrewhfarmer.com/component-communication/' },
        { title: 'REACT JS TUTORIAL #5 - Javascript Events & Data Changes in React', link: 'https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be' },
        { title: 'Fullstack React', link: 'http://newsletter.fullstackreact.com/' },
     

      ],
      label5: 'Week 5: Forms and Controlled and Uncontrolled Inputs',
      sum5: { summary: 'Started learning how to implement forms.' },
      week5: [
        { title: 'React for Everyone #13: Controlled Inputs', link: 'https://www.youtube.com/watch?v=BvtQMxekmH0' },
        { title: 'Forms–React', link: 'https://facebook.github.io/react/docs/forms.html' },
        { title: 'Paw – The most advanced API tool for Mac', link: 'https://paw.cloud/' },
        { title: 'SyntheticEvent', link: 'https://facebook.github.io/react/docs/events.html' },
        { title: 'react-markdown-editor', link: 'https://www.npmjs.com/package/react-markdown-editor' },
        { title: 'Javascript Fatigue', link: 'https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.w2sa5qclk' },
                      
      ],
      label6: 'Week 6: Lifecycle Events',
      sum6: { summary: 'Implemented lifecycle events to add a week component.' },
      week6: [
        { title: 'State and Lifecycle', link: 'https://facebook.github.io/react/docs/state-and-lifecycle.html' },
        { title: 'ReactJS Basics - #11 Communicating between Parent and Child Component', link: 'https://www.youtube.com/watch?v=2teBTI0_eRw' },
        { title: 'ReactJS Basics - #12 Passing Data between Parent and Child Components', link: 'https://www.youtube.com/watch?v=5Xew--ycx0o' },
        { title: 'ReactJS Basics - #13 Two-Way-Binding', link: 'https://www.youtube.com/watch?v=IK9k9hSuYeA' },
        { title: 'ReactJS Basics - #14 Component Lifecycle', link: 'https://www.youtube.com/watch?v=Oioo0IdoEls' },
        { title: 'React.Component', link: 'https://facebook.github.io/react/docs/react-component.html' },
        { title: 'What are typical use cases for React lifecycle methods like componentWillReceiveProps', link: 'https://stackoverflow.com/questions/38929991/what-are-typical-use-cases-for-react-lifecycle-methods-like-componentwillreceive' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },   
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' },          
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

        <Week label={this.state.label6} overview={this.state.sum6} links={this.state.week6} /> 


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
