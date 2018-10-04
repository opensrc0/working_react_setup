import React, { Component } from 'react';
import * as routeService from './../routeService';
import './wrapper.css';

class Wrapper extends Component {

    componentDidMount = () => {
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