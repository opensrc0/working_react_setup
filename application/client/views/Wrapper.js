import React, { Component } from 'react';
import * as routeService from './../routeService';
import './wrapper.css';

console.log(routeService);

class Wrapper extends Component {

    componentDidMount = () => {
      console.log('client');
     
    }

    render() {
      const { 
        route: { routes } 
      } = this.props;

      return (
        <div>
            {routeService.renderRoutes(routes)}
        </div>
      )
    }
}

export default Wrapper;