import React, { Component } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

export default class Location extends Component {
   render() {
      let isTempExist = this.props.weather.temp;
      return (
         <div className='Location'>
            <div>
               <img className='flag' src={this.props.weather.flag} alt='' />
               <h2>{this.props.weather.Location}</h2>
            </div>
            {isTempExist !== '' ? (
               <div className='refresh'>
                  <p>اخرین بروزرسانی : {this.props.weather.time}</p>
                  <button
                     onClick={() => {
                        this.props.refresh(this.props.weather.Location);
                     }}>
                     <FontAwesomeIcon icon={faRedoAlt} />
                  </button>
               </div>
            ) : (
               ''
            )}
         </div>
      );
   }
}
