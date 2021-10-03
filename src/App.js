import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [city, setcity] = useState('');
	const [ip, setip] = useState('');

	//Get IP & City From API
	function Get_ip() {
		const Get_ip = 'https://api.geoapify.com/v1/ipinfo?apiKey=f717ab370d274318a46a52c809dab145';
		fetch(Get_ip, {
			method: 'GET',
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (result) {
				setcity(result.city.name);
				setip(result.ip);
			});
	}
	Get_ip();

	return (
		<div className='App'>
			<main className='App-main'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>IP : {ip}</p>
				<p>Location : {city}</p>
				<p className='Credit'>Created By Erfan </p>
			</main>
		</div>
	);
}

export default App;
