import React, { Component } from 'react';

export default class Week extends Component {
	constructor(props) {
		super(props);
		debugger
	}


	render() {
		const label = this.props.weekdata.label;
		const summary = this.props.weekdata.summary;

		// `this.props.weekdata` in Chrome prints an individual 
		// week object.

		// Map over the week object (we should have just one here)
		// to render each resource list.

		return (
			<div>
				<p>{label}</p>
				<p>{summary}</p>

			</div>
		);
	}
}