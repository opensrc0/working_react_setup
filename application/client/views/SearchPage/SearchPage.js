import React, { Component } from 'react';
import './searchPage.css';

class SearchPage extends Component {

    componentDidMount = () => {
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