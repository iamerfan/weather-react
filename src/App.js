import logo from './logo.svg';
import './App.css';

const ip_api = 'https://api.geoapify.com/v1/ipinfo?apiKey=f717ab370d274318a46a52c809dab145';
const address = {
	country: '',
	city: '',
	ip: '',
};
fetch(ip_api, {
	method: 'GET',
})
	.then(function (response) {
		return response.json();
	})
	.then(function (resulte) {
		address.country = resulte.country.name;
		address.city = resulte.city.name;
		address.ip = resulte.ip;
		console.log(address.country);
		console.log(address.city);
		console.log(address.ip);
	});

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Created By Erfan "Git"
					<br />
					Get The ip and location "Console"
				</p>
			</header>
		</div>
	);
}

export default App;
