import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Location from './Location';
import Tempreture from './Tempreture';

export default class App extends Component {
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
         countryIso: '',
         flag: '',
         time: '',
      };
   }

   SearchBarData = (SearchBarValue) => {
      fetch(
         'https://api.openweathermap.org/data/2.5/weather?q=' +
            SearchBarValue +
            '&units=metric&APPID=08ab3268ec3421db220e4401ed6ec8d7',
      )
         .then((response) => response.json())
         .then((data) => {
            let today = new Date();
            let time =
               today.getHours() +
               ':' +
               today.getMinutes() +
               ':' +
               today.getSeconds();
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
                  icon:
                     'https://openweathermap.org/img/w/' +
                     data.weather[0].icon +
                     '.png',
                  flag:
                     'https://www.countryflags.io/' +
                     data.sys.country +
                     '/flat/24.png',
                  time: time,
               });
               console.log(this.state);
            } else {
               this.setState({
                  temp: '',
                  Location: SearchBarValue + ' یافت نشد ',
                  flag: '',
               });
            }
         });
   };
   componentDidMount() {
      window.addEventListener('load', () => {
         const Cities = [
            'اهواز',
            'تهران',
            'مشهد',
            'اصفهان',
            'رشت',
            'شیراز',
            'کرج',
            'تبریز',
            'اردبیل',
            'آبادان',
         ];
         this.SearchBarData(Cities[Math.floor(Math.random() * 10)]);

         setTimeout(() => {
            document.getElementById('LoadingDiv').style.display = 'none';
         }, 1000);
      });
   }
   render() {
      let isTempExist = this.state.temp;
      return (
         <React.Fragment>
            <div id='LoadingDiv'>
               <div className='Spinner'></div>
               <label>در حال دریافت اطلاعات</label>
            </div>

            <SearchBar SendData={this.SearchBarData} />

            <div className='Main'>
               <Location weather={this.state} refresh={this.SearchBarData} />
               {isTempExist === '' ? '' : <Tempreture weather={this.state} />}
            </div>
         </React.Fragment>
      );
   }
}
