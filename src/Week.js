import React, { Component } from 'react';
// import WeeksContainer from './WeeksContainer.js';

export default class Week extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resource: 'Link Title',
			link: 'URL',
		}
		this.updateResources = this.updateResources.bind(this);
		this.updateLinks = this.updateLinks.bind(this);
		 
	}

  updateResources(event) {
    this.setState({resource: event.target.value});
  }

  updateLinks(event) {
  	this.setState({link: event.target.value});
  }


	render() {
		let singleWeekObj = this.props.weekdata;
		// console.log(singleWeekObj.resources);
		const label = singleWeekObj.label;
		const summary = singleWeekObj.summary;

		// `this.props.weekdata` in Chrome prints an individual 
		// week object.

		// Map over the week object (we should have just one here)
		// to render each resource list.
		// console.log('singleWeekObj ', singleWeekObj);

		const resources = singleWeekObj.resources.map((item, idx) => {
			return <li key={idx}><a href={item.link}>{item.title}</a></li>
		});



		return (
			<div>
				<h2>{label}</h2>
				<p>{summary}</p>
				<ul>{resources}</ul>

				<form>
					<input type='text' value={this.state.resource} onChange={this.updateResources.bind(this)} />
					<input type='text' value={this.state.link} onChange={this.updateLinks.bind(this)} />

					<button onClick={ (event) => { this.props.entrySubmit(this.state.resource, this.state.link, this.props.idx, event) }}>Add Resource</button>
				</form>

			</div>
		);
	}
}