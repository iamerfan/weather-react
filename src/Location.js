import React, { Component } from 'react';
import './index.css';

class Location extends Component {
	render() {
		return (
			<div>
				<h2 className='Location'>{this.props.weather.Location}</h2>
			</div>
		);
	}
}

export default Location;
