import React, { Component } from 'react';


export default class AddResourceForm extends Component {
	createResource(event) {
		event.preventDefault();
		const resource = {
			title: this.title.value,
			link: this.link.value,
		}
		this.props.newResource(resource);
		this.resourceForm.reset();
	}

	render() {
		return (
			<form ref={(input) => this.resourceForm = input} className='App' onSubmit={(event) => this.createResource(event)}>
			{ /*
				<select>
					<option value=""></option>
				</select>
			*/ }
				<input ref={(input) => this.title = input} type="text" placeholder='Resource'/>
				<input ref={(input) => this.link = input} type="text" placeholder='URL'/>
				<button type='submit'>New Resource</button>

			</form>
		);
	}
}