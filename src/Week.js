import React, { Component } from 'react';

export default class Week extends Component {
	constructor(props) {
		super(props);
		
	}


	render() {
		const label = this.props.weekdata.label;
		const summary = this.props.weekdata.summary;

		// `this.props.weekdata` in Chrome prints an individual 
		// week object.

		// Map over the week object (we should have just one here)
		// to render each resource list.

		const resources = this.props.weekdata.resources.map((item, idx) => {
			return <li key={idx}><a href={item.link}>{item.title}</a></li>
		});

		

		return (
			<div>
				<h2>{label}</h2>
				<p>{summary}</p>
				<ul>{resources}</ul>
			</div>
		);
	}
}