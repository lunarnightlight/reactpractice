import React, { Component } from 'react';


export default class AddResource extends Component {
	// button to add link (eventually)

	// clickEvent = (event) => {
	// 	event.preventDefault();
	// 	console.log('Event Pass Successful!');
	// }

	render() {
		return (
				<button onClick={this.props.tagline}>Change the Text</button>
		);
	}
}