import React, { Component } from 'react';

export default class Blurb extends Component {

  render() {
    // const para = this.props.overview.map((item, idx) => {
    //   return <p key={idx}>{item.summary}</p> 
    // });
    // ^Remnant from when I had the summary of the week as part
    // of the week(n) array in the parent state.
    const para = this.props.overview.summary;
    return (
      <p className='App'>{para}</p>
    );
  }
}