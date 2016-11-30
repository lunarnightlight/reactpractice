import React, { Component } from 'react';
import Week from './Week.js';

export default class WeeksContainer extends Component {
	render() {
		const weeksObj = this.props.weeksdata;
		// console.log(weeksObj);
		
		const weeksMap = weeksObj.map((item, idx) => {			
			return <Week key={idx} weekdata={weeksObj[idx]} idx={idx} entrySubmit={this.props.entrySubmit} />
		});

    // const material = this.props.links.map((item, idx) => {
    //   return <li key={idx}><a href={item.link}>{item.title}</a></li>;
    // });

		return (
			<div>
				{weeksMap}

				{ /*
				<div>
					<h2 className='App'>{this.props.label}</h2>
		
					<ul className='App'>{material}</ul>

					<input type='text' value={this.state.resource} onChange={this.newResource.bind(this)} />
					<input type='text' value={this.state.link} onChange={this.newLink.bind(this)} />

				</div>
				*/ }
			</div>
		);
	}
}