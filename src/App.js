import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Location from './Location';
import Tempreture from './Tempreture';

class App extends Component {
	constructor() {
		super();
		this.state = {
			temp: '',
			forecast: '',
			Location: '',
			wind: '',
			maxTemp: '',
			minTemp: '',
			humidity: '',
			rain: '',
			icon: '',
		};
	}

	SearchBarData = (SearchBarValue) => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=' +
				SearchBarValue +
				'&units=metric&APPID=08ab3268ec3421db220e4401ed6ec8d7'
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.cod === 200) {
					this.setState({
						temp: Math.round(data.main['temp']) + '°',
						forecast: data.weather[0].main,
						Location: SearchBarValue,
						wind: Math.round(data.wind.speed),
						maxTemp: Math.round(data.main['temp_max']) + '°',
						minTemp: Math.round(data.main['temp_min']) + '°',
						humidity: data.main['humidity'] + '%',
						rain: data.clouds['all'] + '%',
						icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
					});
				} else {
					this.setState({
						temp: '',
						Location: SearchBarValue + ' یافت نشد ',
					});
				}
			});
	};

	componentDidMount() {
		window.addEventListener('load', () => {
			fetch(
				'https://api.openweathermap.org/data/2.5/weather?q=Ahvaz&units=metric&APPID=08ab3268ec3421db220e4401ed6ec8d7'
			)
				.then((response) => response.json())
				.then((data) => {
					if (data.cod === 200) {
						this.setState({
							temp: Math.round(data.main['temp']) + '°',
							forecast: data.weather[0].main,
							Location: 'اهواز',
							wind: Math.round(data.wind.speed),
							maxTemp: Math.round(data.main['temp_max']) + '°',
							minTemp: Math.round(data.main['temp_min']) + '°',
							humidity: data.main['humidity'] + '%',
							rain: data.clouds['all'] + '%',
							icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
						});
					}
				});
			setTimeout(() => {
				document.getElementById('LoadingDiv').style.display = 'none';
			}, 3000);
		});
	}
	render() {
		let isTempExist = this.state.temp;
		return (
			<div>
				<div id='LoadingDiv' className='LoadingDiv'>
					<div className='Spinner'></div>
				</div>
				<SearchBar SendData={this.SearchBarData} />
				<div className='Main'>
					<Location weather={this.state} />
					{isTempExist === '' ? '' : <Tempreture weather={this.state} />}
				</div>
			</div>
		);
	}
}
export default App;
