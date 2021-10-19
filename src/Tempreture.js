import React, { Component } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faTemperatureHigh,
   faTemperatureLow,
   faWind,
   faTint,
   faCloudShowersHeavy,
} from '@fortawesome/free-solid-svg-icons';

export default class Tempreture extends Component {
   renderForecast(forecast) {
      switch (forecast) {
         case 'Clear':
            return 'صاف';
         case 'Sunny':
            return 'آفتابی';
         case 'Windy':
            return 'باد شدید';
         case 'Dust':
            return 'گرد و خاک';
         case 'Fog':
            return 'مه';
         case 'Clouds':
            return 'ابری';
         case 'Rain':
            return 'بارانی';
         case 'Rainy':
            return 'بارانی';
         default:
            return forecast;
      }
   }
   render() {
      return (
         <div>
            <h1 className='Temp'>{this.props.weather.temp}</h1>
            <div className='minmaxDiv'>
               <div title='حداکثر دما'>
                  <i className='maxIcon'>
                     <FontAwesomeIcon icon={faTemperatureHigh} />
                  </i>
                  {this.props.weather.maxTemp}
               </div>
               <div title='حداقل دما'>
                  <i className='minIcon'>
                     <FontAwesomeIcon icon={faTemperatureLow} />
                  </i>
                  {this.props.weather.minTemp}
               </div>
            </div>

            <hr />
            <div className='FeelsLike'>
               <img src={this.props.weather.icon} alt='' />
               <h2>{this.renderForecast(this.props.weather.forecast)}</h2>
            </div>
            <div className='ForecastDiv'>
               <div title='سرعت باد'>
                  سرعت باد
                  <label>
                     <i>
                        <FontAwesomeIcon icon={faWind} />
                     </i>
                     <br />
                     {this.props.weather.wind}
                  </label>
                  کیلومتر بر ساعت
               </div>
               <div title='رطوبت'>
                  رطوبت
                  <label>
                     <i>
                        <FontAwesomeIcon icon={faTint} />
                     </i>
                     <br />
                     {this.props.weather.humidity}
                  </label>
               </div>
               <div title='احتمال بارش'>
                  احتمال بارش
                  <label>
                     <i>
                        <FontAwesomeIcon icon={faCloudShowersHeavy} />
                     </i>
                     <br />
                     {this.props.weather.rain}
                  </label>
               </div>
            </div>
         </div>
      );
   }
}
