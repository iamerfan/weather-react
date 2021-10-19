import React, { Component } from 'react';
import './index.css';

export default class SearchBar extends Component {
   constructor() {
      super();
      this.state = {
         value: '',
      };
   }

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.SendData(this.state.value);
      this.setState({ value: '' });
   };

   handleChange = (e) => {
      this.setState({
         value: e.target.value,
      });
   };

   render() {
      return (
         <div>
            <form className='SearchBar' onSubmit={this.handleSubmit}>
               <input
                  style={{ outline: 'none' }}
                  className='SearchBarInput'
                  type='text'
                  value={this.state.value}
                  placeholder='نام شهر...'
                  onChange={this.handleChange}
                  required
               />
               <button className='SearchBarButton' type='submit'>
                  جستجو
               </button>
            </form>
         </div>
      );
   }
}
