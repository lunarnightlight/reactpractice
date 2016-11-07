import React, { Component } from 'react';

export default class Week extends Component {
	render() {
		const para = this.props.overview.summary;
    const material = this.props.links.map((item, idx) => {
      return <li key={idx}><a href={item.link}>{item.title}</a></li>;
    });
		return (
			<div>
				<p className='App'>{para}</p>
				<ul className='App'>{material}</ul>
			</div>
		);
	}
}