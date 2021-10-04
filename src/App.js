import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [city, setcity] = useState('');
	const [country, setcountry] = useState('');
	const [flag, setflag] = useState('');
	const [ip, setip] = useState('');

	//Get IP & City From API
	function Get_Data() {
		fetch('https://api.geoapify.com/v1/ipinfo?apiKey=f717ab370d274318a46a52c809dab145')
			.then(function (response) {
				return response.json();
			})
			.then(function (result) {
				setcity(result.city.name);
				setcountry(result.country.name);
				setflag('https://www.countryflags.io/' + result.country.iso_code + '/flat/16.png');
				setip(result.ip);
				if (city !== '') {
					document.getElementById('LoadingDiv').style.display = 'none';
					document.getElementById('DataDiv').style.opacity = '1';
				}
			});
	}
	Get_Data();

	return (
		<div className='App'>
			<main className='App-main'>
				<div id='LoadingDiv' className='LoadingDiv'></div>
				<div className='DataDiv' id='DataDiv'>
					<img src={logo} className='App-logo' alt='' />
					<p>IP : {ip}</p>
					<p>
						Location : {city} | {country} <img src={flag} alt='' />
					</p>
				</div>

				<p className='Credit'>Created By Erfan </p>
			</main>
		</div>
	);
}

export default App;
