import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './homePage.css';

class HomePage extends Component {

    componentDidMount = () => {
      console.log('client');
      // window.addEventListener('click', () => {
      //   alert('Home page');
      // });
    }

    componentWillUnmount() {
      console.log('unmount home');
    }

    render() {
      return (
        <div>
          Home Page found
            <Link to="./search">Search</Link>
        </div>
      )
    }
}

export default HomePage;