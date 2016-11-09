import React, { Component } from 'react';

export default class Week extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resource: 'Link Title',
			link: 'URL',
		}
		this.rewResource = this.newResource.bind(this);
		this.rewLink = this.newLink.bind(this);
	}

  newResource(event) {
    // const resources = {...this.state.resources};
    this.setState({resource: event.target.value});
  // 'resources' is a hypothetical property in the state that holds a list of resources.
  // Right now, what I have are separate resource properties for each week. Maybe I can 
  // combine them into one object under the key 'resources'?
  }

  newLink(event) {
  	this.setState({link: event.target.value});
  }

	render() {
		const para = this.props.overview.summary;
    const material = this.props.links.map((item, idx) => {
      return <li key={idx}><a href={item.link}>{item.title}</a></li>;
    });
		return (
			<div>
				<h2 className='App'>{this.props.label}</h2>
				<p className='App'>{para}</p>
				<ul className='App'>{material}</ul>

				<input type='text' value={this.state.resource} onChange={this.newResource.bind(this)} />
				<input type='text' value={this.state.link} onChange={this.newLink.bind(this)} />

			</div>
		);
	}
}