import React, { Component } from 'react';


export default class Resources extends Component {

  render() {
    const material = this.props.links.map((item, idx) => {
      return <li key={idx}><a href={item.link}>{item.title}</a></li>;
    });
    return (
      <ul className='App'>{material}</ul>
    );
  }
}