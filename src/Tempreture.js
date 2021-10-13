import React, { Component } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

class Tempreture extends Component {
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
						<i style={{ color: '#e3574d', margin: '0 .5rem', opacity: '.9' }}>
							<FontAwesomeIcon icon={faTemperatureHigh} />
						</i>
						: {this.props.weather.maxTemp}
					</div>
					<div title='حداقل دما'>
						<i style={{ color: '#4da2e3', margin: '0 .5rem', opacity: '.9' }}>
							<FontAwesomeIcon icon={faTemperatureLow} />
						</i>
						: {this.props.weather.minTemp}
					</div>
				</div>

				<hr />
				<div className='FeelsLike'>
					<img src={this.props.weather.icon} alt='' />
					<h2>{this.renderForecast(this.props.weather.forecast)}</h2>
				</div>
				<div className='ForecastDiv'>
					<div>
						<label title='سرعت باد'>
							<i>
								<FontAwesomeIcon icon={faWind} />
							</i>
							<br />
							{this.props.weather.wind}
						</label>
						کیلومتر بر ساعت
					</div>
					<div>
						<label title='رطوبت'>
							<i>
								<FontAwesomeIcon icon={faTint} />
							</i>
							<br />
							{this.props.weather.humidity}
						</label>
					</div>
					<div>
						<label title='احتمال بارش'>
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

export default Tempreture;
