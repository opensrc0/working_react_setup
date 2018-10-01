import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './homePage.css';

class HomePage extends Component {

    componentDidMount = () => {
      console.log('client');
    }

    componentWillUnmount() {
      console.log('unmount home');
    }

    render() {
      return (
        <React.Fragment>
          Home Page found
            <Link to="/search/">Search</Link>
        </React.Fragment>
      )
    }
}

export default HomePage;