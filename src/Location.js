import React, { Component } from 'react';
import './index.css';

class Location extends Component {
   render() {
      return (
         <div className='Location'>
            <img className='flag' src={this.props.weather.flag} alt='' />
            <h2>{this.props.weather.Location}</h2>
         </div>
      );
   }
}

export default Location;
