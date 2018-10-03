import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './homePage.css';

class HomePage extends Component {
  static componentWillServerRender = () => {
      // const promises = [];
      console.log('working ssr');
      // var a = fetch('https://sit-digital.ril.com/rildigitalws/v2/rrldigital/cms/pagedata?pageId=headerpage&pageType=contentPage')
      // .then((response) => response.json())
      // .then((response) => console.log(response));  

      // promises.push(a);
      // return Promise.all(promises);
    }
    componentDidMount = () => {
      fetch('https://sit-digital.ril.com/rildigitalws/v2/rrldigital/cms/pagedata?pageId=headerpage&pageType=contentPage')
        .then((response) => response.json())
        .then((response) => console.log(response));      
        // _this.headerData = _this.prepareHeaderData(response.data);
        // _this.menuData = _this.prepareMenuData(response.data);

      // fetch(ServicePath.footer, function (response) {
      //   _this.footerData = response.data;
      // });
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