import React, { Component } from 'react';

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