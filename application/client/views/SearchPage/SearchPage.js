import React, { Component } from 'react';
import './searchPage.css';

class SearchPage extends Component {

    componentDidMount = () => {
      console.log('client');
      // window.addEventListener('click', () => {
      //   alert('search page');
      // });
    }
    componentWillUnmount() {
      console.log('unmount search');
    }

    render() {
      return (
        <div>Search Page found</div>
      )
    }
}

export default SearchPage;