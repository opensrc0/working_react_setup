import React, { Component } from 'react';
import './homePage.css';

class HomePage extends Component {

    componentDidMount = () => {
      console.log('client');
    }

    render() {
      return (
        <div>Home Page found</div>
      )
    }
}

export default HomePage;