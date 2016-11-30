import React, { Component } from 'react';

export default class Week extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: 'Week Label',
			summary: 'Summary',
		}
		this.updateWeekLabel = this.updateWeekLabel.bind(this);
		this.updateWeekSum = this.updateWeekSum.bind(this);
	}

	updateWeekLabel(event) {
		this.setState( {label: event.target.value} );
	}

	updateWeekSum(event) {
		this.setState( {summary: event.target.value} );
	}

	render() {



		return (
			<div>

        <form>
          <input type='text' value={this.state.label} onChange={this.updateWeekLabel.bind(this)} />
          <input type='text' value={this.state.summary} onChange={this.updateWeekSum.bind(this)} />
          <button onClick={ (event) => { this.props.newWeek(this.state.label, this.state.summary, event) }}>Add a New Week</button>
        </form>

			</div>
		);
	}
}