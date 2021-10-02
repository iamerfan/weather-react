import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	let date = new Date().toString();
	const [city, setcity] = useState('');
	const [ip, setip] = useState('');
	const ip_api = 'https://api.geoapify.com/v1/ipinfo?apiKey=f717ab370d274318a46a52c809dab145';
	fetch(ip_api, {
		method: 'GET',
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (resulte) {
			setcity(resulte.city.name);
			setip(resulte.ip);
		});

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Created By Erfan "Git"</p>
				<p>
					Your IP Address is " {ip} " And Your Location is " {city} "
				</p>
			</header>
		</div>
	);
}

export default App;
