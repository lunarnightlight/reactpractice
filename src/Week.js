import React, { Component } from 'react';

export default class Week extends Component {
	render() {
    const material = this.props.links.map((item, idx) => {
      return <li key={idx}><a href={item.link}>{item.title}</a></li>;
    });
		return (
			<div>
				<p className='App'>{this.props.desc}</p>
				<ul className='App'>{material}</ul>
			</div>
		);
	}
}